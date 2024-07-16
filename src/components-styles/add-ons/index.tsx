import styled from "styled-components";

const StyledAddon = styled.li`
    width: 100%;
    input[type = checkbox] {
        cursor: pointer;
        position: relative;
        right: -20px;
        top: 45px;
    }

    input[type = checkbox]:checked + label {
        border: solid 1px hsl(243, 100%, 62%);
    }

    label {
        width: 100%;
        padding: 15px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 25px;
        cursor: pointer;
        border: solid 1px transparent;
        justify-content: space-between;
        background-color: transparent;
    }

    label:hover {
        border: solid 1px hsl(243, 100%, 62%);
    }

    .infos {
        margin-left: 45px;
    }

    p {
        color: hsl(231, 11%, 63%);
    }

    .price {
        color: hsl(243, 100%, 62%)
    }
`

export { StyledAddon }