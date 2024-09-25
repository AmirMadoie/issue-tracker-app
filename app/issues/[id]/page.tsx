import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Heading , Text ,Flex , Card} from "@radix-ui/themes";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const IssueDetailPage: React.FC<Props> = async ({ params: { id } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  
  if (!issue) notFound();
  
  return (
    <div>
      <Heading>{issue.title}</Heading>
       <Flex className="space-x-3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
       </Flex>
       <Card>
      <p>{issue.description}</p>
       </Card>
    </div>
  );
};

export default IssueDetailPage;
