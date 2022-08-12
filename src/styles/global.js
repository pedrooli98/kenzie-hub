import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }

  :root {
    /* primary palette: */
    --primary-focus: #FF577F;
    --primary-focus: #FF427F;
    --primary-negative: #59323F;
    /* grey scale plette: */
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
  }

  body{
    background-color: var(--grey-4);
  }



`