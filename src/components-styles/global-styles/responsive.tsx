import { createGlobalStyle } from "styled-components";
import { StyledAsideSelector, StyledSelectorList, StyledSelectorOption } from "../aside-selector";
import { StyledPageContainer } from "../page-container";
import { StyledMain } from "../main"; 
import { StyledMainSection } from "../user-infos";
import { StyledPlansList, StyledPlanOtion } from "../select-plan";
import { StyledConfirmMessage } from "../confirm-message";
import mobile from "../../assets/images/bg-sidebar-mobile.svg"

const MobileStyles = createGlobalStyle`
    @media(max-width: 475px){
        ${StyledPageContainer}{
            align-items: flex-start;
            justify-content: flex-start;
        }
        ${StyledAsideSelector}{
            background: url(${mobile}) no-repeat center center;
            max-width: inherit;
            background-size: cover;
            height: 175px;
            border-radius: 0; 
        }
        ${StyledSelectorList}{
            flex-direction: row;
            width: 100%;
            height: auto;
            gap: 20px;
            padding: 20px;
            justify-content: center;
            align-items: center;
        }
        ${StyledSelectorOption}{
            .infos{
                display: none;
            }
        }

        body, ${StyledMain}, ${StyledMainSection} {
            padding: 0;
        }

        body {
            position: relative;
        }

        ${StyledMain}{
            position: relative;
            width: 100%;

            footer {
                width: 100%;
                position: absolute;
                bottom: 2%;
                right: 3%;
                gap: 30%; 
                flex-wrap: wrap;
            }
        }

        ${StyledMainSection}{
            position: absolute;
            background-color: white;
            top: -130px;
            padding: 30px;
            border-radius: 10px;
            width: 92%;
            left: 3.7%;
        }

        ${StyledPlanOtion}{
            width: 100%;

            label{
                width: 100%;
                flex-direction: row;
                gap: 20px;
            }
        }

        ${StyledPlansList}{
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            li{
                width: 100%
            }
        }

        ${StyledConfirmMessage}{
            wwidth: 100%;
            height: 100%;
            margin-top: 50px;
            gap: 20px;
            justify-content: flex-start;

            img {
                height: auto;
            }

            p {
                font-size: 18px;
            }
        }
    }
`

export { MobileStyles }