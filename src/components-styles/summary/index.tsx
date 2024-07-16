import styled from "styled-components";

const StyledPlanSection = styled.section`
    width: 100%;
    color: hsl(213, 96%, 18%);
    font-weight: 600;

    div {
        display: flex;
        justify-content: space-between
    }

    .change:hover {
        text-decoration: underline;
    }
`

const StyledAddonsList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    li {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    li p:first-child {
        color: hsl(231, 11%, 63%);
    }
`

export { StyledPlanSection, StyledAddonsList } 