import {
  DELETE_ALL_THIS_GOOD_FROM_CART,
} from '../constants';

export function deleteAllThisGoodFromCart(good) {
  return {
    type: DELETE_ALL_THIS_GOOD_FROM_CART,
    payload: goodsInCart => {
      good.quantity = 0;
      goodsInCart = goodsInCart.filter(item => item.code !== good.code);
      return goodsInCart;
    },
  };
}
