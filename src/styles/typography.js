import styled, {css} from "styled-components";

const Typography = styled.p`
  font-family: 'Inter', sans-serif;
  ${({font}) => {
    switch(font){
      case "logo":
        return css`
          font-size:1.3rem;
          font-weight:bold;
        `
      case "title1":
        return css`
          font-size:1.1rem;
          font-weight:bold;
        `
      case "title2":
        return css`
          font-size:1rem;
          font-weight:bold;
        `
      case "title3":
        return css`
          font-size:0.9rem;
          font-weight:bold;
        `
      case "headlineBold":
        return css`
          font-size:0.8rem;
          font-weight:bold;
        `
        case "headlineItalic":
        return css`
          font-size:0.8rem;
          font-style:italic;
        `
      default:
        return css`
          font-size:0.7rem;
          font-weight:400;
        `
      }
    }}
  ${props=>{
    switch(props.color){
      case "grey":
        return css`
          color:#868E96;
        `
      case "colorPrimary":
        return css`
          color:#FF577F;
        `
      default:
        return css`
          color:#F8F9FA;
        `
    }
  }}

`

export default Typography