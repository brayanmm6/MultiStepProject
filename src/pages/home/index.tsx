import { AsideSelector } from "../../components/aside-selector"
import { UserInfos } from "../../components/user-infos"
import { StyledPageContainer } from "../../components-styles/page-container"

const HomePage = () => {
    return(
        <StyledPageContainer>
            <AsideSelector />
            <UserInfos/>
        </StyledPageContainer>
    )
}

export { HomePage }