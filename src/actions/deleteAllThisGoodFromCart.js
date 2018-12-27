export function deleteAllThisGoodFromCart(good) {
  return {
    type: 'DELETE_ALL_THIS_GOOD_FROM_CART',
    payload: goodsInCart => {
      goodsInCart = goodsInCart.filter(item => item.code !== good.code);
      return goodsInCart;
    },
  };
}
