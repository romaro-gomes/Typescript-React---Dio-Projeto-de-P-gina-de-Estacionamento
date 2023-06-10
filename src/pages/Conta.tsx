import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { CardInfo } from "../components/CardInfo/CardInfo"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from "../components/AppContext/AppContext"


interface IUserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string

}

export const Conta = () =>{

    const context= useContext(AppContext)

    const [userData, setUserData] = useState<null | IUserData>() //EStou informando que o useState pode receber nulo ou Do tipo interfaceUserData
    const {id } = useParams()
        

     // Permite que se mova entre páginas
    const navigate = useNavigate()

    //Perite acessar a pro isLoggeIn
    const {isLoggedIn } = useContext(AppContext)

    //Verifica se estar logando, se não tiver, volte para a Home
    !isLoggedIn && navigate('/')

    useEffect(() => { //O useEffect permite trabalhar com funções assíncronas.
        const getData = async () => {
            const data: any | IUserData = await api // O retorn na api pode ser vazio ou IUserData. A varaiavel data aceita, qualquer tipo ou do tipo IUserData
            setUserData(data)
        }

        getData()
    }, [])

    const actualData= new Date()  
    
    //const params = useParams() // Captura parametros de uma rota
    //console.log(params)

    
 
    // Confirmando se foi informado o id correto
    if( userData && id !== userData.id) {
        //Se a condição não for realizada ele vai para a página inicial
        navigate('/')
   }   
    
    return(
        <Center>
            <SimpleGrid row={2} >
                {
                    userData === undefined || userData === null ?
                    (<Center>
                        <Spinner size='xl' color='black'/>
                    </Center>):
                    (<>
                        <CardInfo title={`Olá ${userData?.name}`} content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}/>

                        <CardInfo title='Saldo' content={`R$ ${userData.balance}`}/>
                    </>
                    )
                }
                
               
            </SimpleGrid>
        </Center>
    )
}
