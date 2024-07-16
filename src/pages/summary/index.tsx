import { StyledPageContainer } from "../../components-styles/page-container";
import { AsideSelector } from "../../components/aside-selector";
import { Summary } from "../../components/summary";

const SummaryPage = () => {
    return(
        <StyledPageContainer>
            <AsideSelector />
            <Summary />
        </StyledPageContainer>
    )
}

export { SummaryPage }