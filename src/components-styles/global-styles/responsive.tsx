import { createGlobalStyle } from "styled-components";
import { StyledAsideSelector, StyledSelectorList, StyledSelectorOption } from "../aside-selector";
import { StyledPageContainer } from "../page-container";
import { StyledMain } from "../main"; 
import { StyledMainSection } from "../user-infos";
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
            padding: 10px;
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
            height: 100%;
            width: 100%;
        }

        ${StyledMainSection}{
            position: absolute;
            background-color: white;
            top: -90px;
            padding: 30px;
            border-radius: 10px;
        }
    }
`

export { MobileStyles }