import { Box} from "@chakra-ui/react";




{/*
interface IUserData {
    email: string,
    password: string,
    name: string
}

 */}
export const CardHome = ({children}: any) => {
    
    return (
        <Box minHeight='100vh' background='#204e5f' padding='25px'>
            {children}
        </Box>
    )
}  