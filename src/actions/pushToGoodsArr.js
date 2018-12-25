export function pushToGoodsArr(items, price, goods) {
  return {
    type: 'PUSH_TO_GOODS_ARR',
    payload: {
      goodsArr: goods,
      totalItems: items,
      totalPrice: price,
    },
  };
}
