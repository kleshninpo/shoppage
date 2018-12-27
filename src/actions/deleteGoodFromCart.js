export function deleteGoodFromCart(good) {
  return {
    type: 'DELETE_GOOD_FROM_CART',
    payload: goodsInCart => {
      let i = 0;
      while (goodsInCart[i].code !== good.code) {
        i++;
      }

      --good.quantity;
      goodsInCart.splice(i, 1);
      return {
        goodsInCart,
        good,
      };
    },
  };
}
