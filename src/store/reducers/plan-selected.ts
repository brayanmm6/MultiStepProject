import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialPlanSelected {
    plan: string,
    price: number,
}

const initialState : InitialPlanSelected = {
    plan: "",
    price: 0
} 

export const selectedPlanSlice = createSlice({
    name: "selectedPlan",
    initialState,
    reducers: {
        addSelectedPlan: (state: InitialPlanSelected, action : PayloadAction<InitialPlanSelected>) => {
            state.plan = action.payload.plan,
            state.price = action.payload.price 
        }
    }
})

export const { addSelectedPlan } = selectedPlanSlice.actions
export default selectedPlanSlice.reducer