import { StyledMain } from "../../components-styles/main"
import { StyledInputContainer, StyledInputsArea, StyledInput, StyledMainSection } from "../../components-styles/user-infos"
import { useState } from "react"
import { Button } from "../button"

const UserInfos = () => {

    interface InputStatus {
        email?: boolean,
        phone?: boolean
    }

    const [ inputEmailStatus, setInputEmailStatus ] = useState<InputStatus>({
        email: true,
    })

    const [ inputPhoneStatus, setInputPhoneStatus ] = useState<InputStatus>({
        phone: true
    })

    return (
        <StyledMain>
            <StyledMainSection>
                <div className="personal-info">
                    <h2>Personal Info</h2>
                    <p>Please provide your name, email address, and phone number. </p>
                </div>
                <StyledInputsArea>
                    <StyledInputContainer>
                        <label htmlFor="user-name">
                            <p>Name</p>
                        </label>
                        <StyledInput type="text" name="user-name" id="user-name" $border={false}/>
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <label htmlFor="email-address">
                            <p>Email Address</p>
                            { ! inputEmailStatus.email && <p className="required-message">This field is required!</p> }
                        </label>
                        <StyledInput type="email" name="email-address" id="email-address" placeholder="example123@gmail.com" $border={true} $bordercolor={inputEmailStatus.email ? "hsl(231, 11%, 63%)" : "red"} $outlinecolor={inputEmailStatus.email ? "blue" : "red"} onChange={event => event.target.value === "" ? setInputEmailStatus({email: false}) : setInputEmailStatus({email: true})}/>
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <label htmlFor="">
                            <p>Phone Number</p>
                            { ! inputPhoneStatus.phone && <p className="required-message">This field is required!</p> }
                        </label>
                        
                        <StyledInput type="tel" name="phone" id="phone" $border={true} $bordercolor={inputPhoneStatus.phone ? "hsl(231, 11%, 63%)" : "red"} $outlinecolor={inputPhoneStatus.phone ? "blue" : "red"} pattern="[0-9]{2}-[0-9]{9}" placeholder="(11) 91234-1234" required onChange={(event) => event.target.value === "" ? setInputPhoneStatus({phone: false}) : setInputPhoneStatus({phone: true})} />
                    </StyledInputContainer>
                </StyledInputsArea>
            </StyledMainSection>

            
            <footer>
                <Button title="Next Step" $backgroundcolor="hsl(213, 96%, 18%)" $color="white" $bordercolor="black" $hoverbackground="hsl(243, 100%, 62%)" $hovercolor="white"/>
            </footer>
        </StyledMain>
    )
}

export { UserInfos }