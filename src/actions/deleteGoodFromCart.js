import {
  DELETE_GOOD_FROM_CART,
} from '../constants';

export function deleteGoodFromCart(good) {
  return {
    type: DELETE_GOOD_FROM_CART,
    payload: goodsInCart => {
      if (goodsInCart.length) {

        let i = 0;
        while (goodsInCart[i].code !== good.code) {
          i++;
        }

        --good.quantity;
        goodsInCart.splice(i, 1);
        return goodsInCart;
      }

      return goodsInCart;
    },
  };
}
