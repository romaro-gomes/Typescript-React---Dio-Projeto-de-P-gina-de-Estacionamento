import { Box } from "@chakra-ui/react"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

export const Layout = ({ children }: any) => {
    return (
        <Box minHeight='100vh' background='#204e5f' padding='25px'>
            <Header />
            {children}
            <Footer />
        </Box >
            );
}