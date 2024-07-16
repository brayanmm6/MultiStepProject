import { Button } from "../button"
import { StyledMain } from "../../components-styles/main"
import { StyledMainSection } from "../../components-styles/user-infos"
import { RootState } from "../../store/store"
import { useSelector, useDispatch } from "react-redux"
import { yearPlanRule } from "../../ts/variables" 
import { StyledAddon } from "../../components-styles/add-ons"
import { AddOnsProps, addOns } from "../../ts/variables"
import { addSelectedAddOn } from "../../store/reducers/selected-add-ons"

const Addon = ({title, id, description, price} : AddOnsProps) => {

    const planType = useSelector((state : RootState) => state.planType)
    const selectedAddOn = useSelector((state: RootState) => state.selectedAddOn)
    const dispatch = useDispatch()

    return(
        <StyledAddon >
            <input type="checkbox" name="add-on" id={id} defaultChecked={selectedAddOn.services.findIndex(item => item.title === title) != -1 && true }/>
            <label htmlFor={id} onClick={() => dispatch(addSelectedAddOn({title: title, price: planType.plan === "year" ? yearPlanRule(price) : price}))}>    
                <div className="infos">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                {
                    planType.plan === "year" ? <p className="price">{`+$${yearPlanRule(price)}/yr`}</p> : <p className="price">{`+$${price}/mo`}</p>
                }
            </label>
        </StyledAddon>
    )
}

const RenderAddOns = () => {
    return(
        <StyledMain>
            <StyledMainSection>
                <div className="personal-info">
                    <h2>Pick add-ons</h2>
                    <p>Add-ons help enhance your gaming experience. </p>
                </div>
                <ul>
                     {
                        addOns.map((addon, index) => {
                            return(
                                <Addon key={index} title={addon.title} id={addon.id} description={addon.description} price={addon.price} />
                            )
                        })
                     }
                </ul>
            </StyledMainSection>
            <footer>
                <Button title="Go Back" $backgroundcolor="hsl(0, 0%, 100%)" $color="hsl(231, 11%, 63%)" $bordercolor="transparent" $hoverbackground="hsl(243, 100%, 62%)" $hovercolor="white" back={true}/>
                <Button title="Next Step" $backgroundcolor="hsl(213, 96%, 18%)" $color="white" $bordercolor="black" $hoverbackground="hsl(243, 100%, 62%)" $hovercolor="white"/>
            </footer>
        </StyledMain>          
    )
} 

export { RenderAddOns }