import styled, {css} from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
gap:1.4rem;
padding:30px calc(100%/4);
`

export const ContainerHome = styled(Container)`
  width:100%;
  flex-wrap:wrap;
  ${props => {
    switch(props.size){
      case "header":
        return css`
          padding:0 calc(100%/4);
          height: 64px;
          & > div{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-wrap:wrap;
            width:100%;
            min-width: 273px;
          }
        border-bottom: 1px solid #343B41
          
        `
      case "section":
        return css`
          padding:0 calc(100%/4);
          height: 100px;
          & > div{
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
            min-width: 273px;
          }
          p{
            max-width: 220px;
            text-align:right;
          }
          border-bottom: 1px solid #343B41
        `
        
      default:
        return css`
          padding:0 calc(100%/4);
          height: 64px;
          & > div{
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
            min-width: 273px;
          }
        ` 
    }
  }}
`
