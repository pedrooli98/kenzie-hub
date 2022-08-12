import React from "react";
import { ContainerHome } from "../../styles/container";
import Typography from "../../styles/typography";
import { Button } from "../Button";
import { Redirect, useHistory } from "react-router-dom";

const Header = ({children}) => {
  const history = useHistory()

  return(
    <header>
      <ContainerHome size="header">
        <div> 
          <Typography font="logo" color="colorPrimary">KenzieHub</Typography>
            {children}
          <Button buttonStyle="small" onClick={()=>{
              localStorage.clear()
              window.location.reload(true)
            }}>
            <Typography font="headlineBold">Sair</Typography>
          </Button>
        </div>
      </ContainerHome>
    </header>
  )
}

export default Header