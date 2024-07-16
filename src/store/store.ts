import { configureStore } from "@reduxjs/toolkit";
import planTypeReducer from "./reducers/plan-type"
import selectedPlanReducer from "./reducers/plan-selected"
import selectedAddOnsReducer from "./reducers/selected-add-ons"

const store = configureStore({
    reducer: {
        planType: planTypeReducer,
        selectedPlan: selectedPlanReducer,
        selectedAddOn: selectedAddOnsReducer 
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store }