import { createLocalStorage, dioBank, getAllLocalStorage } from "./storageLocal"

describe('storage', () =>{

    const getItem= jest.spyOn(Storage.prototype, 'getItem')
    
    it('Deve retornar localstorage', () =>
    {
        getAllLocalStorage()
        expect(getItem).toHaveBeenCalled()
    })

    it('Deve criar o objeto no localStorage', () => {
        const mockSetItem = jest.spyOn(Storage.prototype,'setItem')
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})