import styled from "styled-components";

export interface ButtonProps {
    title? : string,
    value? : string | number,
    $backgroundcolor : string,
    $hoverbackground: string,
    $color : string,
    $hovercolor: string,
    $bordercolor: string,
    back?: boolean,
    confirm?: boolean
}

const StyledButton = styled.button<ButtonProps>`
    min-width: 120px;
    padding: 15px;
    background-color: ${props => props.$backgroundcolor};
    color: ${props => props.$color};
    border: solid 1px ${props => props.$bordercolor};
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.$hoverbackground};
        color: ${props => props.$hovercolor}
    }
`

export { StyledButton }