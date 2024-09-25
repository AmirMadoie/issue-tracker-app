import NextLink from "next/link";
import { Link as radixLink} from "@radix-ui/themes";

interface Props{
    href:string
    children:string
}

const Link:React.FC<Props> = ({href,children}) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
        <radixLink>{children}</radixLink>
    </NextLink>
  )
}

export default Link