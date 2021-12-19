import { ActionType } from "../contants/action-types"

const initialState = {
    products: []
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionType.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload} ) => {
    switch(type) {
        case ActionType.SELECTED_PRODUCTS:
            return {...state, ...payload};
        case ActionType.REMOVESELECTED_PRODUCTS:
            return {};
        default:
            return state;
    }
}