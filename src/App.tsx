
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout/Layout';
import { AppContextProvider } from './components/AppContext/AppContext';
import { MainRoutes } from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storageLocal';


// Isto garante que possamos usar essa informação em qualquer parte do código.

interface IAppContext{
  user: string

}



function App() {

  
  createLocalStorage();

  return(
    <BrowserRouter>
    <AppContextProvider>
      <ChakraProvider>
        <Layout>
          <MainRoutes/>
        </Layout >
      </ChakraProvider >
    </AppContextProvider>
  </BrowserRouter>

  )
}

export default App;

{/*  Terceira forma de realizar o página Home
function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/conta/:id' element={<Conta />} />
            <Route path='/infoConta' element={<ContaInfo/>}/>

          </Routes>

        </Layout >
      </ChakraProvider >
    </BrowserRouter>

*/}
  

{/* //import styled from  'styled-components'
// Como usar o styled-components
// const Box =styled.div`
//   background-color: green;
//   border-radius:25px;
//   padding-left: 15px;
// `

// <></> */}

{/* // Primeira parte // 

      // <React.Fragment>
      // <Header/>
      // <div>
      //   <h1>Hello World</h1>
      //   <Card
      //    id={1}
      //    paragraph='Frontends'
      //    details='Thar course you will learn about html, css and react'
      //    />
      
      //   <Card
      //    id={2}
      //    paragraph='Data'
      //    details='We will build a dashboard using PowerBi and R'
      //    />
      // </div>
      // <Footer/>
      
      // </React.Fragment>

   

   // Segunda parte Apenas com componentes react //
      // <Layout>
      // <Box> //estilização usando a lib syled-compoenent
      //  <h1>Faça o login</h1>
      // </Box>

      
      //  <label htmlFor="emailInput">
      //   Email
      //  </label>
      //  <input type="email" id="emailInput"/>

       
      //   <label htmlFor="passwordInput">
      //   Senha
      //   </label>

      //  <input type="password" id="passwordInput" />

      //  <button>
      //   Entrar
      //  </button>
      // </Layout>
    */}
