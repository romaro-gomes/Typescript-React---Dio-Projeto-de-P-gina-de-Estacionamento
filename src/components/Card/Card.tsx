import { Box, Center, Flex, Input,Text } from "@chakra-ui/react";
import { ButtonLogin } from "../ButtonLogin/ButtonLogin";
import { login } from "../../services/login";

export const Card = () =>{
    return(
        <Box minHeight='100vh' background='#204e5f' padding='25px'>
                
            <Box background='#416877' borderRadius='15px' padding='10px' margin='10px'>
            
                <Center margin='10px'>
                    <Text fontSize={20} color='white' >Faça o Login</Text> 
                </Center>

                <Flex gap={2}>
                    <Input paddingRight='20px' backgroundColor='#ffffff' placeholder='email'/>
                    <Input padding='20px'  backgroundColor='#ffffff' placeholder='password'/> 
                </Flex>

                <Center>
                    <ButtonLogin
                    onClick={login}/>
                </Center>


            </Box>
        </Box>
    )
}