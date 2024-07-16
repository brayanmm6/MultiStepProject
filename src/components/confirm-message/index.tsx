import thankYou from "../../assets/images/icon-thank-you.svg"
import { StyledConfirmMessage } from "../../components-styles/confirm-message"
import { StyledMain } from "../../components-styles/main"
import { StyledMainSection } from "../../components-styles/user-infos"

const ConfirmMessage = () => {
    return(
        <StyledMain>
            <StyledMainSection>
                <StyledConfirmMessage>
                    <img src={thankYou} alt="thank-you-message" />
                    <h1>Thank You!</h1>
                    <p>Thanks for confirm your subscription on! We hope you have fun using our plataform. If you ever need support, plesas fell free to email us at support@loremgaming.com</p>
                </StyledConfirmMessage>
            </StyledMainSection>
        </StyledMain>
    )
}

export { ConfirmMessage }