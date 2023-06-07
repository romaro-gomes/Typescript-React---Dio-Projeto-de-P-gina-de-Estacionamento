import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IDButton {
    onClick: MouseEventHandler,
    
}

export const ButtonLogin = ({ onClick }: IDButton) => {
    return(
        <Button
          onClick={onClick}
          colorScheme="teal"
          size="sm"
          width="100%"
          marginTop="5px"
        >
          Login
        </Button>
    )
}

