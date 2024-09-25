import { Flex, Card, Box } from '@radix-ui/themes'
import {Skeleton} from '@/app/components'


const LoadingIssueDetailPage:React.FC = () => {
  return (
    <Box className="max-w-xl">
    <Skeleton />
     <Flex className="space-x-3" my="2">
     <Skeleton with="5rem" />
     <Skeleton with="8rem" />
     </Flex>
     <Card className="prose" mt="4">
     <Skeleton count={3} />
     </Card>
  </Box>
  )
}

export default LoadingIssueDetailPage