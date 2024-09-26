import { Button } from "@radix-ui/themes";
import React from "react";

const DeleteIssueButton: React.FC<{ issueId: number }> = ({issueId}) => {
  return <Button color="red">Delete Issue</Button>;
};

export default DeleteIssueButton;
