import { createGlobalStyle } from "styled-components";

import ArrowDown from "../Assets/icons/arrow-down.png";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background-color: #ECEDF2;
    color: #696977;
    -webkit-font-smoothing: antialiased;
    padding: 15px;
  }

  html{
    font-size: 16px;
  }

  body, input, button{
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  select {
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;    
  }

  .fa-caret-down{
    position: absolute;
    right: 5px;
    top: 25%;
    cursor: pointer;
  }
`;
