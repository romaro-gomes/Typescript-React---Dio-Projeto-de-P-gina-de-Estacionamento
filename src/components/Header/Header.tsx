import { Box, Text }  from '@chakra-ui/react'


export const Header = () =>{
    return(
        <Box background='#204e5f' padding='25px' color='white'>
            <Text fontSize={30} color='white' >DIO Estacionamentos </Text> 
            <Text fontSize={20} color='grey' >O melhor aplicativo de controle de vagas</Text> 
        </Box>
    )
}