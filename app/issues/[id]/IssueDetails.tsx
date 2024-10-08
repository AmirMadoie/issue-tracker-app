import { Heading, Text, Flex, Card } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import { Issue } from "@prisma/client";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";

const IssueDetails: React.FC<{issue:Issue}> = ({issue}) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
    <Flex className="space-x-3" my="2">
      <IssueStatusBadge status={issue.status} />
      <Text>{issue.createdAt.toDateString()}</Text>
    </Flex>
    <Card className="prose max-w-full" mt="4">
      <ReactMarkdown>{issue.description}</ReactMarkdown>
    </Card>
    </>
  
  )
}

export default IssueDetails