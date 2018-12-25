export const initialState = {
  totalPrice: 0,
  totalItems: 0,
  discountSize: 1800,
  isDiscount: false,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'PUSH_TO_GOODS_ARR':
      return { ...state,
        totalItems: action.payload.totalItems,
        totalPrice: action.payload.totalPrice,
      };
    default:
      return state;
  }
}
