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
    if (state.allProducts[i].productId === payload.id) {
      state.allProducts[i][payload.field] = payload.value;
      return;
    }
  }
}

export function filter(state, payload) {
  state.filter = payload;
}

export function resetFilter(state) {
  state.filter = {};
}

export function sort(state, payload) {
  if (state.sort.sortBy !== payload) {
    state.sort = {
      sortBy: payload,
      sortDirect: 'ASC',
    };
  } else {
    state.sort = {
      sortBy: payload,
      sortDirect: state.sort.sortDirect === 'ASC' ? 'DESC' : 'ASC',
    };
  }
}

export function resetSort(state) {
  state.sort = {};
}
