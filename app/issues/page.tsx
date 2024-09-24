import { Button, Link } from "@radix-ui/themes";

const IssuesPage: React.FC = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new" className="text-white">
          New Issue
        </Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
