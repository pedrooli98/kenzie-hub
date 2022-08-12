import styled from "styled-components";

const Card = styled.button`
  height: 48px;
  width:100%;
  background-color:#121214;
  border:none;
  padding:12px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-radius:4px;
  &:hover{
    background-color:#343B41;
    transition:.3s;
  }

  div {
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:1rem;
  }

  .icon{
    color:white;
    width:17px;
    height:17px;
  }

  .icon:hover{
    color:red;
    transition:.3s;
  }
`

export default Card