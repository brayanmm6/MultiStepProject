import advancedIcon from "../../assets/images/icon-advanced.svg"
import arcadeIcon from "../../assets/images/icon-arcade.svg"
import proIcon from "../../assets/images/icon-pro.svg"
import { Button } from "../button"
import { StyledMain } from "../../components-styles/main"
import { StyledMainSection } from "../../components-styles/user-infos"
import { StyledPlansList, StyledPlanOtion } from "../../components-styles/select-plan"
import { SwitchButton } from "../switch-button"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store/store" 
import { yearPlanRule } from "../../ts/variables"
import { addSelectedPlan } from "../../store/reducers/plan-selected"

interface PlanOptionProps {
    icon: string,
    title: string,
    price: number
}

interface PLans {
    title: string,
    icon: string,
    price: number
}

const plans : PLans[] =  [
    {
        title: "Arcade",
        icon: arcadeIcon,
        price: 9
    },
    {
        title: "Advanced",
        icon: advancedIcon,
        price: 12
    },
    {
        title: "Pro",
        icon: proIcon,
        price: 15
    }
]

const PlanOption = ({icon, title, price} : PlanOptionProps) =>  {

    const dispatch = useDispatch()
    const planType = useSelector((state: RootState) => state.planType)
    const selectedPlan = useSelector((state : RootState) => state.selectedPlan)

    return(
        <StyledPlanOtion>
            <input type="radio" name="plan-option" id={title} defaultChecked={title === selectedPlan.plan && true } onClick={() => dispatch(addSelectedPlan({plan: title, price: planType.plan === "year" ? yearPlanRule(price) : price}))}/>
            <label htmlFor={title} >
                <img src={icon} alt={title} />
                <div className="plan-infos">
                    <h3>{title}</h3>
                    <p>{`$${planType.plan === "year" ? yearPlanRule(price) : price}/${planType.plan === "year" ?  "yr" : "mo"}`}</p>
                </div>
            </label>
        </StyledPlanOtion>
    )
}



const SelectPlan = () => {
    return(
        <StyledMain>
            <StyledMainSection>
                <div className="personal-info">
                    <h2>Select your plan</h2>
                    <p>You have the options of monthly or yearly billing. </p>
                </div>
                <StyledPlansList>
                    {
                        plans.map((plan, index) => {
                            return(
                                <li key={index}>
                                    <PlanOption title={plan.title} icon={plan.icon} price={plan.price} />
                                </li>
                            )
                        })
                    }
                </StyledPlansList>
                <SwitchButton />
            </StyledMainSection>
            <footer>
                <Button title="Go Back" $backgroundcolor="hsl(0, 0%, 100%)" $color="hsl(231, 11%, 63%)" $bordercolor="transparent" $hoverbackground="hsl(243, 100%, 62%)" $hovercolor="white" back={true}/>
                <Button title="Next Step" $backgroundcolor="hsl(213, 96%, 18%)" $color="white" $bordercolor="black" $hoverbackground="hsl(243, 100%, 62%)" $hovercolor="white"/>
            </footer>
        </StyledMain>
    )
}

export { SelectPlan }