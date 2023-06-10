import { MouseEventHandler, useContext, useState } from "react";
import { CardHome } from "../components/CardHome/CardHome";
import { Box, Center,Flex,Input,Text } from "@chakra-ui/react";
import { login } from "../services/login";
import { ButtonLogin } from "../components/ButtonLogin/ButtonLogin";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext/AppContext";

export const Home = () => {
    /* Conseguindo informações de um evento */
    const [email, setEmail] = useState<string>('')
     //O useState permite trabalhar com estados e modifica-los posteriormente

    /*
    const [userData, setUserData] = useState<null | IUserData>() //EStou informando que o useState pode receber nulo ou Do tipo interfaceUserData

    useEffect(() => { //O useEffect permite trabalhar com funções assíncronas.
        const getData = async () => {
            const data: any | IUserData = await api // O retorn na api pode ser vazio ou IUserData. A varaiavel data aceita, qualquer tipo ou do tipo IUserData
            setUserData(data)
        }

        getData()
    })

    console.log(userData)
    */

    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string)=> {
            const loggedIn = await login(email)

            if(!loggedIn){
                return alert('Email Invalido')
            }

            setIsLoggedIn(true)
            navigate("/conta/1")
    }

    return (
        <CardHome>

            <Box background='#416877' borderRadius='15px' padding='10px' margin='10px'>
                    
                    {/* Renderização condicional */}
                    {/* Primeiro exemplo */}
                    {/* {userData === null || userData === undefined && <h1>Loading...</h1>} */}
                    {/*
                        {userData === null || userData === undefined ?
                        <h1>Loading...</h1> :
                        <h1>Informações Carregadas</h1>} {/* Isso é um if ternario */} 
                        
                    <Center margin='10px'>
                        <Text fontSize={30} color='white' >Faça o Login</Text>
                    </Center>

                    {/*
                    <Center margin='10px'>

                        <Text fontSize={20} color='#d3d3d3' >{userData?.name}</Text> {/* O ?. serve para verficar se um atributo está presente ou não 
                    </Center> */}

                    <Flex gap={2}>
                        <Input paddingRight='20px' backgroundColor='#ffffff' placeholder='email'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                        <Input padding='20px' backgroundColor='#ffffff' placeholder='password' />
                    </Flex>

                    <Center>
                        <ButtonLogin
                            onClick={() => validateUser(email)} />
                    </Center>

                </Box>
        
        </CardHome>
        )
}

