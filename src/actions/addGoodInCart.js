export function addGoodInCart(good) {
  return {
    type: 'ADD_GOOD_IN_CART',
    payload: () => {
      ++good.quantity;
      return good;
    },
  };
}
