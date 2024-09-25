"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import { createIssueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, Spinner, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type IssueFormData = z.infer<typeof createIssueSchema>;

const IssueForm: React.FC = ({issue}:{issue?:Issue}) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

const onSubmit= handleSubmit(async (data) => {
  try {
    await axios.post("/api/issues", data);
    setIsSubmiting(true)
    router.push("/issues");
  } catch (error) {            
    setIsSubmiting(false)
    setError("An unexpected error occurred");
  }
})

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={onSubmit}
      >
        <TextField.Root defaultValue={issue?.title} placeholder="Title" {...register("title")} />
     <ErrorMessage>{errors.title?.message}</ErrorMessage> 
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
       <ErrorMessage>{errors.description?.message}</ErrorMessage> 
        <Button disabled={isSubmiting}>Submit New Issue{isSubmiting && <Spinner />}</Button>
      </form>
    </div>
  );
};

export default IssueForm;
