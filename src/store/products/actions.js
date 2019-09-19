export async function getAllProducts(context) {
  const data = [
    {
      name: 'test1',
      product_id: 1,
      price: 0.1,
      show: false,
      code: 'a223',
    },
    {
      name: 'test2',
      product_id: 2,
      price: 0.1,
      show: true,
      code: 'b223',
    },
  ];
  context.commit('setAllProducts', data);
}

export async function removeProduct(context, item) {
  context.commit('removeProduct', item);
}

export async function editProductField(context, options) {
  context.commit('editProduct', options);
}
