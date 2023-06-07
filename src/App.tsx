import { Layout } from './components/Layout/Layout';
import { Card } from './components/Card/Card'

import { 
 
  ChakraProvider,

} from '@chakra-ui/react'

function App() {
  return (  
    <>
  <ChakraProvider>
    <Layout>
        <Card/>
    </Layout>
  </ChakraProvider>
  </>

  );
};

export default App;

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
