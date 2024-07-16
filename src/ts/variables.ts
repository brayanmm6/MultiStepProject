import { AppDispatch } from "../store/store"

export const yearPlanRule = (price: number) => {
    return price * 10
}

export interface AddOnsProps {
    title: string,
    id: string,
    description: string,
    price: number,
    onClick?: any
}

export const addOns : AddOnsProps[] = [
    {
        title: "Online Service",
        id: "online-service",
        description: "Access to multiply games",
        price: 1
    },
    {
        title: "Larger Storage",
        id: "larger-storage",
        description: "Extra 1TB of cloud save",
        price: 2
    },
    {
        title: "Customizable Profile",
        id: "customizable-profile",
        description: "Custom theme on your profile",
        price: 2
    }
]