const lsFavorites = 'favorites';

function saveFavorites(context) {
  localStorage.setItem(lsFavorites, JSON.stringify(context.state.items));
}

export function getFavorites(context) {
  context.commit('setItems', JSON.parse(localStorage.getItem(lsFavorites)));
}

export function addProduct(context, { productId }) {
  context.commit('setItem', { productId, count: 1 });
  saveFavorites(context);
}

export function removeProduct(context, productId) {
  context.commit('setItem', { productId, count: 0 });
  saveFavorites(context);
}
