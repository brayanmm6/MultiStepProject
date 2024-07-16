import { StyledButton, ButtonProps } from "../../components-styles/button"
import { useNavigate, useParams, NavigateFunction, Navigate } from "react-router-dom"
import { options } from "../aside-selector"

const nextStepChange = (current : number, navigate : NavigateFunction ) => {
    if(current >= 1 && current < 4){
        options.map(opt => {
            opt.step - 1 === current && navigate(`/${opt.selectTitle}/${opt.step}`) 
        })  
    }
}

const backStepChange = ( current : number, navigate : NavigateFunction ) => {
    if( current >= 2 && current <= 4 ) {
        options.map(opt => {
             if(opt.step + 1 === current){
                opt.step === 1 ? navigate("/") : navigate(`/${opt.selectTitle}/${opt.step}`)
             }
        })
    }
}

interface HandleButton { 
    idNumber:  number,
    navigate: NavigateFunction,
    back?: boolean,
    confirm?: boolean
}

const handleButton = ( handle : HandleButton ) => {
    handle.back ? backStepChange(handle.idNumber, handle.navigate) : nextStepChange(handle.idNumber, handle.navigate)
    handle.confirm && handle.navigate("/CONFIRM/4")
}

const Button = ({title, value, $backgroundcolor, $color, $hovercolor, $hoverbackground, $bordercolor, back, confirm} : ButtonProps) => {
    const navigate = useNavigate()
    const { id } = useParams()
    let idNumber = null
    id === undefined ? idNumber = 1 : idNumber = Number(id)
    
    return(
        <>
            <StyledButton $backgroundcolor={$backgroundcolor} $color={$color} $hovercolor={$hovercolor} $hoverbackground={$hoverbackground} $bordercolor={$bordercolor} onClick={() => handleButton({idNumber: idNumber, navigate: navigate, back: back, confirm: confirm})} >
                {title}    
            </StyledButton>
        </>
    )
}

export { Button }