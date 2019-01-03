import {
  ADD_GOOD_IN_CART,
  DELETE_GOOD_FROM_CART,
  DELETE_ALL_THIS_GOOD_FROM_CART,
  APPLY_DISCOUNT, SHOW_HAMBURGER,
} from '../constants';

export const initialState = {
  goodsInCart: [],
  discountSize: 1800,
  isDiscount: false,
  showHamburger: false,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GOOD_IN_CART:
      return {
        ...state,
        goodsInCart: [
          ...state.goodsInCart,
          action.payload(),
        ],
      };
    case DELETE_GOOD_FROM_CART:
      return {
        ...state,
        goodsInCart: [
          ...action.payload(state.goodsInCart),
        ],
      };
    case DELETE_ALL_THIS_GOOD_FROM_CART:
      return {
        ...state,
        goodsInCart: action.payload(state.goodsInCart),
      };
    case APPLY_DISCOUNT:
      return {
        ...state,
        isDiscount: !state.isDiscount,
      };
    case SHOW_HAMBURGER:
      return {
        ...state,
        showHamburger: !state.showHamburger,
      };
    default:
      return state;
  }
}
