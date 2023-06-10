import { login } from './login'


//Simula as informação de login, extraido as informaçõa do AppContext e as alterando,

const mockSetIsLoggedIn = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        isLoggedIn:true,
        setIsLoggedIn: mockSetIsLoggedIn 
    })
}))

const mockNavigate= jest.fn()

jest.mock('react-router-dom', () =>({
    ...jest.requireActual('react-router-dom') ,
    useNaviate: () => mockNavigate
}))


describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = 'romario@dio'


    it('Deve exibir um alert de boas vindas cas o email seja valido', async () => {
        const response = await login(mockEmail)
        expect(response).toBeTruthy()
        // expect(mockSetIsLoggedIn).toHaveBeenLastCalledWith(true)
        // expect(mockNavigate).toHaveBeenCalledWith('/1')
    })


    it('Deve exibir um erro caso o email seja invalido', async () => {
        const response = await login('invalido@dio.com')
        expect(response).toBeFalsy()
        // expect(mockSetIsLoggedIn).not.toHaveBeenLastCalled()
        
    })
})

// Segundo Teste: Testando login com email
/*
describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = 'romario@dio.me'

    it('Deve exibir um alert de boas vindas', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}`)
    })

    it('Não deve exibir o alert sem o email', () => {
        login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo')
    })
})
*/

/* Primeiro teste para aparecer o alerta Bem-vindo */
/*    describe('login', () => {

        const mockAlert = jest.fn()
        window.alert = mockAlert

        it('Deve exibir um alerta de boas vindas', () =>{
           
            login()
            //expect(mockAlert).toBeCalled()
            expect(mockAlert).toHaveBeenCalledWith('Bem Vindo')

        })
    })
    */