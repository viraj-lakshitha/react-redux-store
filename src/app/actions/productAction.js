import { ActionType } from "../contants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (products) => {
    return {
        type: ActionType.SELECTED_PRODUCTS,
        payload: products
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionType.REMOVESELECTED_PRODUCTS,
        payload: null
    }
}