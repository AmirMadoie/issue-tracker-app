import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Heading, Text, Flex, Card, Grid, Box, Button } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import delay from "delay";

interface Props {
  params: { id: string };
}

const IssueDetailPage: React.FC<Props> = async ({ params: { id } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  await delay(2000);

  if (!issue) notFound();

  return (
    <Grid columns={{initial:"1",md:"2"}} gap="5">
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex className="space-x-3" my="2">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>Edit Issue</Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
