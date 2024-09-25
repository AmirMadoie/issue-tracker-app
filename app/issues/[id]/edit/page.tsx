import React from 'react'
import IssueForm from '../../components/IssueForm'
import prisma from '@/prisma/client'

interface Props{
    params:{id:string}
}

const EditIssuePage:React.FC<Props> =async ({params:{id}}) => {
const issue=  await prisma.issue.findUnique({where:{id:parseInt(id)}})

  return (
    <IssueForm issue={issue} />
  )
}

export default EditIssuePage