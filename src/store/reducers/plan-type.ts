import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PlanTypeInitialState {
    plan: string
    price: number
} 

const initialState : PlanTypeInitialState = {
    plan: "mounth",
    price: 0
} 

export const planTypeSlice = createSlice({
    name: 'planType',
    initialState,
    reducers: {
        addplanType: (state : PlanTypeInitialState, action: PayloadAction<PlanTypeInitialState>) => {
            state.plan = action.payload.plan,
            state.price = action.payload.price
        }
    }
})

export const { addplanType } = planTypeSlice.actions
export default planTypeSlice.reducer