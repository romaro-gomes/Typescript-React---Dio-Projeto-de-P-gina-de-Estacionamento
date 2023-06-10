import { Box, Button, Center, Flex, Spacer, Text }  from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../AppContext/AppContext'
import { useNavigate } from 'react-router-dom'



export const Header = () =>{
    const { isLoggedIn, setIsLoggedIn }= useContext(AppContext)
    const navigate= useNavigate()

    const logout = () =>
            setIsLoggedIn(false)
            navigate('/')

    return(
       < Flex background='#416877' padding='25px' color='white' minWidth='100vh'>
        <Box >
            <Text fontSize={30} color='white' >DIO Estacionamentos </Text> 
            <Text fontSize={20} color='grey' >O melhor aplicativo de controle de vagas</Text> 
        </Box>
        {
            isLoggedIn && (
                <>
            <Spacer/>
            <Center>
                <Button
                onClick={() =>logout() }>
                    Sair
                </Button>
            </Center>
            </>
            )}

        </Flex>
        
       
    )
}