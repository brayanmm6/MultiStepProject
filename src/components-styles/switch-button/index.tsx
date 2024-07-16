import styled from "styled-components";

const StyledSwitchButton = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    p {
        min-width: 100px;
        text-align: center;
    }

    #year-plan {
        color: hsl(231, 11%, 63%);
    }

    #mounth-plan {
        color: hsl(213, 96%, 18%);
        font-weight: 600; 
    }

    #switch-button {
        display: none;
    }

    #switch-button:checked ~ label .ball {
        translate: 29px;
    }

    #switch-button:checked ~ p#year-plan {
        color: hsl(213, 96%, 18%);
        font-weight: 600;
    }

    #switch-button:checked ~ p#mounth-plan {
        color: hsl(231, 11%, 63%);
    }

    label {
        cursor: pointer;
    }

    .ball-trail{
        width: 50px;
        height: 20px;
        background-color: hsl(213, 96%, 18%);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-conten: center;
        padding: 2px 3px; 
    }

    .ball {
        width: 15px;
        height: 15px;
        background-color: hsl(229, 24%, 87%);
        border-radius: 50%;
        transition: 0.3s ease-in-out;
    }
`

export { StyledSwitchButton }