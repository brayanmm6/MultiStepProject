import { StyledPageContainer } from "../../components-styles/page-container"
import { AsideSelector } from "../../components/aside-selector"
import { SelectPlan } from "../../components/select-plan"

const SelectPLanPage = () => {
    return(
        <StyledPageContainer>
            <AsideSelector />
            <SelectPlan />
        </StyledPageContainer>
    )
}

export { SelectPLanPage }