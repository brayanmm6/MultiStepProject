import styled from "styled-components";

export interface AsideProps {
    $background?: string,
    $mobileBackground?: string
}

const StyledAsideSelector = styled.aside<AsideProps>`
    max-width: 320px;
    width: 100%;
    height: 650px;
    background: url(${props => props.$background}) no-repeat center center;
    background-size: cover;
    border-radius: 10px;
    padding: 10px;
`

const StyledSelectorList = styled.ul`
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 30px;
`

const StyledSelectorOption = styled.li`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    color: #fff;

    .step-inputs{
        display: block;
    }

    .step{
        background-color: hsl(243, 100%, 62%);
        width: 40px;
        height: 40px;
        font-size: 25px;
        color: #000;
        border-radius: 50%;
        border: solid 1px #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    input[type = radio] { display: none }

    input[type = radio]:checked + label {
        background-color: hsl(206, 94%, 87%);
    }

    .infos{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 10px 0;
    }

    .infos h2{
        font-size: 18px;
        line-height: 40px;
    }

    .infos p {
        line-height: 0px;
    }
`

export { StyledAsideSelector, StyledSelectorList, StyledSelectorOption }