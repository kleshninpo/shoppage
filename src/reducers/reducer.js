export const initialState = {
    totalPrice: 0,
    totalItems: 0,
    discountSize: 1800,
    isDiscount: false,
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "MINUS_TOTAL_ITEMS":
            return {...state, totalItems: action.payload}
        case "PLUS_TOTAL_ITEMS":
            return {...state, totalItems: action.payload}
        default:
            return state;
    }
}