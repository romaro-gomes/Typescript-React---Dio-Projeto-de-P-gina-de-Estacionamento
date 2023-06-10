
// Simulando uma função assíncrona
const conta = {
    email: 'romario@dio',
    password: '123456',
    name:'Romario',
    balance: 2000,
    id:'1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1000);
})