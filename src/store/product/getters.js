export function allProducts(state) {
  return state.allProducts;
}

export function product(state) {
  return state.product;
}

export function newProducts(state) {
  return state.allProducts.filter(item => item.isNew);
}

export function hitProducts(state) {
  return state.allProducts.filter(item => item.isHit);
}

export function listFields(state) {
  return state.listFields;
}

export function allFields(state) {
  return state.allFields;
}
