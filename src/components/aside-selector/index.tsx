import { StyledAsideSelector, StyledSelectorList, StyledSelectorOption } from "../../components-styles/aside-selector";
import asideBackground from "../../assets/images/bg-sidebar-desktop.svg"
import mobileAsideBackground from "../../assets/images/bg-sidebar-mobile.svg"
import { useNavigate, useParams } from "react-router-dom";

interface SelectorOptionsProps {
    selectTitle: string,
    target?: string,
    step: number,
    selected?: number
}

type Option = {
    step: number,
    selectTitle: string,
    target: string
}

const options : Option[] = [
    {step: 1, selectTitle: "YOUR INFO", target: "your-info"},
    {step: 2, selectTitle: "SELECT PLAN", target: "select-plan"},
    {step: 3, selectTitle: "ADD-ONS", target: "add-ons"},
    {step: 4, selectTitle: "SUMMARY", target: "summary"}
]

const SelectOption = ({selectTitle, step} : SelectorOptionsProps) => {
    const { id } = useParams<string>() 
    let idNumber = null
    id === undefined ? idNumber = 1 : idNumber = Number(id)
    
    return(
        <StyledSelectorOption >
            <input type="radio" name="step-option" id={`step-${step}`} disabled={true} className="inputs" value={step} defaultChecked={idNumber === step || !idNumber && step === 1 ? true : false}/>     
            <label htmlFor={`step-${step}`} className="step" >{step}</label>           
            <div className="infos">
                <p>STEP {step}</p>
                <h2>{selectTitle}</h2>
            </div>
        </StyledSelectorOption>
    )
}

const AsideSelector  = ()  => {
    return(
        <StyledAsideSelector $background={asideBackground} $mobileBackground={mobileAsideBackground}>
            <StyledSelectorList>
                <>
                    {
                        options.map((opt, index) => {
                            return(
                                <SelectOption selected={0} key={index} step={opt.step} selectTitle={opt.selectTitle} />
                            )
                        })
                    }
                </>
            </StyledSelectorList>
        </StyledAsideSelector>
    )
}

export { AsideSelector, SelectOption, options }