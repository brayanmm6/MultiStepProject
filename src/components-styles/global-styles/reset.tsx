import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
    }

    input {
        border: none;
         outline: none     
    }
`

export { ResetStyles }