import styled from "styled-components";

const Form = styled.div`
  min-width: 296px;
  max-width: 369px;
  width: calc(100% - 3rem);
  background-color:#212529;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:1rem;
  padding:42px 17px;
  border-radius: 4px;
  height:auto;

  form{
    display:flex;
    flex-direction:column;
    width: 100%;
    gap:1rem;
  }
`
export default Form