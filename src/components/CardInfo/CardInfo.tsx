import { Box,Text } from "@chakra-ui/react"
import { info } from "console";
interface ICardInfo {
    title: string
    content:string
}

export const CardInfo = ({ title, content }: ICardInfo) => {
    return (
        <Box
            backgroundColor={'white'}
            minHeight='120px'
            minWidth='500px'
            paddingTop='30px'
            paddingLeft='20px'
            margin={5}
            borderRadius='24px'
        >
            <Text fontSize='xl' fontWeight={'bold'}>
                {title}
            </Text>
            <Text>
                {content}
            </Text>
        </Box>
    );



};