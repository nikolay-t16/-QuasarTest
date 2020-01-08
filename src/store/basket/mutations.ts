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

export function setFavorites(state, favorites) {
  state.favorites = favorites || {};
}

export function setFavorite(state, { productId, count }) {
  if (+count > 0) {
    state.favorites[+productId] = 1;
  } else if (+count === 0) {
    delete state.favorites[+productId];
  }
}
