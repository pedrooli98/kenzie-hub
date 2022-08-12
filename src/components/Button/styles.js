import styled, {css} from "styled-components";

const ThemeButton = styled.button`
  border:none;
  border-radius:4px;
  transition: .3s;
  ${props=>{
    switch(props.buttonStyle){
      case "big":
        return css`
          width:100%;
          height:38px;
          background-color: #FF577F;
          &:disabled{
            width:100%;
            height:38px;
            background-color: #59323F;
            cursor:not-allowed;
          }
        `
      case "smaller":
        return css`
          width:32px;
          height:32px;
          background-color: #212529;
          &:disabled{
            background-color: #343B41;
            cursor:not-allowed;
            width:32px;
            height:32px;
          }

        `
      case "small":
       return css`
          width:55px;
          height:32px;
          background-color: #212529;
          &:disabled{
            background-color: #343B41;
            cursor:not-allowed;
            width:55px;
            height:32px;
          }          
       `
       case "mid":
        return css`
          width:204px;
          height:48px;
          background-color: #FF577F;
          &:disabled{
            cursor:not-allowed;
            background-color: #59323F;
            width:204px;
            height:48px;
          }
        `
      default :
        return css`
          width:98px;
          height:48px;
          background-color: #868E96;
          &:disabled{
            cursor:not-allowed;
            background-color: #343B41;
            width:98px;
            height:48px;
          }
    }}
        `
    }
  }}
`
export default ThemeButton