import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddOnServices {
    title?: string,
    price?: number,
}

interface SelectedAddOnInitial {
    services : AddOnServices[],
    total: number
}

const initialState : SelectedAddOnInitial = {
    services: [],
    total: 0
}

export const selectedAddOnsSlice = createSlice({
    name: "selectedAddOns",
    initialState,
    reducers: {
        addSelectedAddOn: (state: SelectedAddOnInitial, action: PayloadAction<AddOnServices>) => {
            const verify = state.services.findIndex(item => item.title === action.payload.title)
            verify === -1 ? state.services.push({title: action.payload.title, price: action.payload.price}) : state.services.splice(verify, 1)
            let totalSum = 0
            state.services.map( item => totalSum += item.price ?? 0 )
            state.total = totalSum
        }
    }
})

export const { addSelectedAddOn } = selectedAddOnsSlice.actions
export default selectedAddOnsSlice.reducer 