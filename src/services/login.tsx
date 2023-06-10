
import { api } from "../api"

export const login = async (email: string): Promise<any> => {

    //Verifica se o usaurio está loggado ou não
    // const { setIsLoggedIn } = useContext(AppContext)
    // const navigate = useNavigate()
    const data: any = await api

    if (email !== data.email) {
      return false
    }

    return true

    //Ele só vai enviar o alert se o login fr true
    // setIsLoggedIn(true)
    // navigate(`/${data.id}` )
}





{/* 
export const login = async (email: string): Promise<void> => {
    const data: any = await api

    if (email !== data.email) {
        return alert('Email inválido')
    }
    return alert(`Bem-vindo ${email}`)
}
*/}
/*
export const login = (email: string): void => {
    alert(`Bem vindo ${email}`)
}

*/

// Primeira funçõa para aparcer o bem-vindo
/*
export const login = (): void => {
    alert('Bem Vindo')
}
*/