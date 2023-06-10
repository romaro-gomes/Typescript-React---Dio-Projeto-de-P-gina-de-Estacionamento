import {  Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const ContaInfo = () =>{
    return(
        <> 
        <Link to='/conta/1'>
            <Text color='white' fontSize={'ml'}>
                Conta do Usuário
            </Text>
        </Link>

        {/* Diferente da tag a, o Link do route não precisa baixar a pagina novamnte */}
        <Text color='white' fontSize={'xl'}>
            Informações da Conta
        </Text>

       
        </>
    )
}