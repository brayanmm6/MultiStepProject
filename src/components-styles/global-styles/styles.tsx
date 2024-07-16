import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    body{
        width: 100%;
        height: 100vh;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: hsl(0, 0%, 100%);
        font-family: "Ubuntu", sans-serif;
    }

    #root{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export { Styles }