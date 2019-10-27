export function setAllProducts(state, payload) {
  state.allProducts = payload;
}

export function setProduct(state, payload) {
  state.product = payload;
}

export function removeProduct(state, payload) {
  const index = state.allProducts.indexOf(payload);
  if (index > -1) {
    state.allProducts.splice(index, 1);
  }
}

export function editProduct(state, payload) {
  for (let i = 0; i < state.allProducts.length; i += 1) {
    if (state.allProducts[i].id === payload.id) {
      state.allProducts[i][payload.field] = payload.value;
      return;
    }
  }
}
