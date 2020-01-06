export function setItems(state, items) {
  state.items = items || {};
}

export function setItem(state, { productId, count }) {
  if (+count > 0) {
    state.items[+productId] = +count;
  } else if (+count === 0) {
    delete state.items[+productId];
  }
}
