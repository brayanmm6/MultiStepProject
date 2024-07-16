import styled from "styled-components";


const StyledConfirmMessage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    img { 
        width: 80px;
        height: 100%;
    }

    h1 {
        color: hsl(213, 96%, 18%);
        font-size: 24px;
    }

    p {
        color: hsl(231, 11%, 63%);
        text-align: center;
    }
`

export { StyledConfirmMessage }