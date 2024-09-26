"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import axios from 'axios'
import { useState } from "react";



const DeleteIssueButton: React.FC<{ issueId: number }> = ({ issueId }) => {
  const router = useRouter();
const [error,setError] = useState(false)

const onDelete =async()=>{
  try {
     await axios.delete("/api/issues/"+ issueId)
     router.push('/issues')
     router.refresh()
  } catch (error) {
    setError(true)
  }

}

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">Delete Issue</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this issue? This action can not be
            undone
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={onDelete}>
                Delete Issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
      <AlertDialog.Content>
      <AlertDialog.Title>Error</AlertDialog.Title>
      <AlertDialog.Description>
           This issue could not be deleted
          </AlertDialog.Description>
          <Button color="gray" variant="soft" mt="2" onClick={()=> setError(false)}>OK</Button>
      </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
