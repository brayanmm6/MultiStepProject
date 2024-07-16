import { StyledMain } from "../../components-styles/main";
import { StyledMainSection } from "../../components-styles/user-infos";
import { Button } from "../button";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import { StyledPlanSection, StyledAddonsList } from "../../components-styles/summary";

const Summary = () => {

    const selectedPlan = useSelector((state : RootState) => state.selectedPlan)
    const selectedAddOn = useSelector((state : RootState) => state.selectedAddOn)
    const planType = useSelector((state: RootState) => state.planType)
    
    return(
        <StyledMain>
            <StyledMainSection>
                <div className="personal-info">
                    <h2>Finishing Up</h2>
                    <p>Double-check everthing looks OK before confirming. </p>
                </div>

                <StyledPlanSection>
                    {
                        selectedPlan.plan ? 
                            <>
                                <div>
                                    <p>{`${selectedPlan.plan} ( ${planType.plan === "mounth" ? "Mounthly" : "Yearly"} )`}</p>
                                    <p className="price">{ `$${selectedPlan.price}/${planType.plan === "year" ? "yr" : "mo"}` }</p>
                                </div>
                                <Link to={"/SELECT PLAN/2"} className="change">
                                    <p>Change</p>
                                </Link>
                            </>
                            :
                            <div>
                                <Link to={"/SELECT PLAN/2"}>
                                    <p>Selecione</p>
                                </Link>
                            </div>
                    }    
                </StyledPlanSection>
                <StyledAddonsList>
                    {
                        selectedAddOn.services &&
                        selectedAddOn.services.map((item, index) => {
                            return(
                                <li key={index}>
                                    <p>{item.title}</p>
                                    <p>{ `+$${item.price}/${planType.plan === "year" ? "yr" : "mo"}` }</p>
                                </li>
                            )
                        })
                    }
                </StyledAddonsList>
                <div className="total">
                    <p>Total (per {planType.plan})</p>
                    <p>+${selectedPlan.price + selectedAddOn.total}/{planType.plan === "year" ? "yr" : "mo"}</p>
                </div>
            </StyledMainSection>
            <footer>
                <Button title="Go Back" $backgroundcolor="hsl(0, 0%, 100%)" $color="hsl(231, 11%, 63%)" $bordercolor="transparent" $hoverbackground="hsl(243, 100%, 62%)" $hovercolor="white" back={true}/>
                <Button title="Confirm" $backgroundcolor="hsl(243, 100%, 62%)" confirm={true} $color="white" $bordercolor="transparent" $hoverbackground="hsl(213, 96%, 18%)" $hovercolor="white"/>
            </footer>
        </StyledMain>
    )
}

export { Summary }