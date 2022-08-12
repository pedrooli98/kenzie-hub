import React from "react";
import ThemeButton from "./styles";


export const Button = ({children,onClick,loading,buttonStyle }) => {
  return(
    <>
        {loading ? (
          <ThemeButton 
            disabled={loading}
            buttonStyle={buttonStyle}
            type="button"
          >Carregando..
          .</ThemeButton>
          )
        :(
          <ThemeButton 
            onClick={()=>onClick()}
            buttonStyle={buttonStyle}
            type="button"
          >{children}</ThemeButton>  
        )}
      </>
  )
}

export const SubmitButton = ({children,loading,buttonStyle}) => {
  return(
    <>
    {loading ? (
      <ThemeButton 
      type="submit"
      disabled={loading}
      buttonStyle={buttonStyle}
      >Carregando...</ThemeButton>
      )
    :(
      <ThemeButton
      type="submit"
      buttonStyle={buttonStyle}
      >
        {children}
      </ThemeButton>  
    )}
  </>
  )
}





