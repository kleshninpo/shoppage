import {
  ADD_GOOD_IN_CART,
} from '../constants';

export function addGoodInCart(good) {
  return {
    type: ADD_GOOD_IN_CART,
    payload: () => {
      ++good.quantity;
      return good;
    },
  };
}
