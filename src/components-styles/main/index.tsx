import styled from "styled-components";

const StyledMain = styled.section` 
    max-width: 650px;
    width: 100%; 
    background-color: hsl(0, 0%, 100%);
    border-radius: 10px;
    min-height: 650px;
    padding: 40px 80px; 
    display: flex;
    gap: 25px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    footer{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 50%
    }
`

export { StyledMain }
