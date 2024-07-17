import styled from "styled-components";

const StyledPlansList = styled.ul`
    display: flex; 
    justify-content: center;
    gap: 15px;
`

const StyledPlanOtion = styled.div`
    width: 140px;
    height: auto;

    input[type = radio]{
        display: none;
    }

    label{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
        padding: 20px;
        border: solid 1px transparent;
        border-radius: 10px;

        .plan-infos{
            line-height: 25px;
        }

        .plan-infos p{
            color: hsl(231, 11%, 63%);
        }
    }

    label:hover {
        border: solid 1px hsl(213, 96%, 18%); 
    }

    input[type = radio]:checked + label {
       border: solid 1px hsl(213, 96%, 18%);
    }
`

export { StyledPlansList, StyledPlanOtion }