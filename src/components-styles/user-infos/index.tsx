import styled from "styled-components";

const StyledInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;

    .required-message{
        color: red;
        font-size: 12px;
        text-align: end;
        line-height: 5px;
    }

    label{
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 20px;
    }

    label p {
        color: hsl(213, 96%, 18%);
    }
`

const StyledInputsArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    justify-self: flex-start;
`
interface InputProps {
    $color?: string;
    $outlinecolor?: string;
    $border: boolean;
    $bordercolor?: string;
}
const StyledInput = styled.input<InputProps>`
    width: 100%;
    padding: 10px 20px;
    border-radius: 10px;
    border: ${props => props.$border && "solid"} 1px ${props => props.$bordercolor ?? "black"};
    &:focus{
        outline: solid 1px ${props => props.$outlinecolor ?? "hsl(231, 11%, 63%)"};
    }
`

const StyledMainSection = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    
    ul{
        width: 100%;
    }

    .personal-info p{
        line-height: 40px;
        color: hsl(231, 11%, 63%);
    }

    .personal-info h2 {
        color: hsl(213, 96%, 18%);
    }

    .total {
        display: flex;
        justify-content: space-between;
    }

    .total p:first-child {
        color: hsl(231, 11%, 63%);
    }

    .total p:last-child{
        font-weight: 600;
        font-size: 22px;
        color: hsl(243, 100%, 62%);
    }
`

export { StyledInputContainer, StyledInputsArea, StyledInput, StyledMainSection }