import { Route, Routes } from "react-router-dom"
import { Conta } from "./pages/Conta"
import { ContaInfo } from "./pages/ContaInfo"
import { AppContext } from "./components/AppContext/AppContext"
import { useContext } from "react"
import { Home } from "./pages/Home"

export const MainRoutes = () =>{
    const {isLoggedIn} = useContext(AppContext)
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/conta/:id' element={isLoggedIn ?  <Conta/> : <Home/> } />
            <Route path='/infoConta' element={<ContaInfo/>}/>

      </Routes>

    )
}
