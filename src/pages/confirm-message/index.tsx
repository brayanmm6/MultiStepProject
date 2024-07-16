import { ConfirmMessage } from "../../components/confirm-message";
import { AsideSelector } from "../../components/aside-selector";
import { StyledPageContainer } from "../../components-styles/page-container";


const ConfirmMessagePage = () => {
    return(
        <StyledPageContainer>
            <AsideSelector />
            <ConfirmMessage />
        </StyledPageContainer>
    )
}

export { ConfirmMessagePage }