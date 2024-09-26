import Link from "next/link";
import { Button } from "@radix-ui/themes";

const EditIssueButton: React.FC< { issueId: number }> = ({ issueId }) => {
  return (
    <Button>
      <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
