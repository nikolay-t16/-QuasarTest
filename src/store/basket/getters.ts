export function basket(state, getters, rootState, rootGetters) {
  const allPproducts = rootGetters['product/allMapProducts'];
  const items = {};
  const favorites = {};
  let totalCount = 0;
  let totalPrice = 0;
  const products = [];
  // eslint-disable-next-line array-callback-return
  Object.entries(state.items).map(([productId, count]) => {
    if (allPproducts.has(+productId)) {
      const product = allPproducts.get(+productId);
      items[+productId] = count;
      products.push(product);
      totalCount += +count;
      totalPrice += count * product.price;
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
    products,
    favorites,
    totalCount,
    totalPrice,
  };
}
