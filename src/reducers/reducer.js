export const initialState = {
  goodsInCart: [],
  discountSize: 1800,
  isDiscount: false,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_GOOD_IN_CART':
      return {
        ...state,
        goodsInCart: [
          ...state.goodsInCart,
          action.payload(),
        ],
      };
    case 'DELETE_GOOD_FROM_CART':
      return {
        ...state,
        goodsInCart: action.payload(state.goodsInCart).goodsInCart,
      };
    case 'APPLY_DISCOUNT':
      return {
        ...state,
        isDiscount: !state.isDiscount,
      };
    case 'DELETE_ALL_THIS_GOOD_FROM_CART':
      return {
        ...state,
        goodsInCart: action.payload(state.goodsInCart),
      };
    default:
      return state;
  }
}
