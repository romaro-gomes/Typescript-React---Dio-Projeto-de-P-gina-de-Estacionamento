import { login } from './login'
    describe('login', () => {

        const mockAlert = jest.fn()
        window.alert = mockAlert

        it('Deve exibir um alerta de boas vindas', () =>{
           
            login()
            //expect(mockAlert).toBeCalled()
            expect(mockAlert).toHaveBeenCalledWith('Bem Vindo')

        })
    })