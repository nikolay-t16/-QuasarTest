export function basket(state, getters, rootState, rootGetters) {
  const products = rootGetters['product/allMapProducts'];
  const items = {};
  const favorites = {};
  let totalCount = 0;
  let totalPrice = 0;
  // eslint-disable-next-line array-callback-return
  Object.entries(state.items).map(([productId, count]) => {
    if (products.has(+productId)) {
      items[+productId] = count;
      totalCount += +count;
      totalPrice += count * products.get(+productId).price;
    }
  });
  // eslint-disable-next-line array-callback-return
  Object.entries(state.favorites).map(([productId, count]) => {
    if (products.has(+productId)) {
      favorites[+productId] = count;
    }
  });
  return {
    items,
    favorites,
    totalCount,
    totalPrice,
  };
}
