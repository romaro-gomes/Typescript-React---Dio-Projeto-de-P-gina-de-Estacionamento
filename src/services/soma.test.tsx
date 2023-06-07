import { soma, multiplicar } from './soma'
describe('soma', () => {
    
    it('deve somar 1 ao numero informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('deve retornar o dobro do numero', () => {
        const value = multiplicar(2)
        expect(value).toBe(4)
    })
})