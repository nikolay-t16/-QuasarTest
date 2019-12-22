export function basket(state, getters, rootState, rootGetters) {
  const allPproducts = rootGetters['product/allMapProducts'];
  const items = {};
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
  return {
    items,
    products,
    totalCount,
    totalPrice,
  };
}
