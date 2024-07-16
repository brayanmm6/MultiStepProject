import { StyledPageContainer } from "../../components-styles/page-container"
import { RenderAddOns } from "../../components/add-ons"
import { AsideSelector } from "../../components/aside-selector"

const AddOnsPage = () => {
    return(
        <StyledPageContainer>
            <AsideSelector />
            <RenderAddOns />
        </StyledPageContainer>
    )
}

export { AddOnsPage }