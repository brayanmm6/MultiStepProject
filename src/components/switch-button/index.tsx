import { StyledSwitchButton } from "../../components-styles/switch-button"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { addplanType } from "../../store/reducers/plan-type"


const SwitchButton = () => {

    const dispatch = useDispatch()
    const planType = useSelector((state: RootState) => state.planType)

    return(
        <StyledSwitchButton>       
            <input type="checkbox" name="switch" id="switch-button" />
            <p id="mounth-plan">Mounthly</p>
            <label htmlFor="switch-button" onClick={() => dispatch(addplanType({plan: planType.plan === "year" ? "mounth" : "year", price: 12}))}>
                <div className="ball-trail">
                    <div className="ball"></div>
                </div>
            </label>
            <p id="year-plan">Yearly</p>       
        </StyledSwitchButton>
    )
}

export { SwitchButton }