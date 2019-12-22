const lsBasket = 'basket';

function saveBasket(context) {
  localStorage.setItem(lsBasket, JSON.stringify(context.state.items));
}

export function getBasket(context) {
  context.commit('setItems', JSON.parse(localStorage.getItem(lsBasket)));
}

export function addProduct(context, { productId, count }) {
  context.commit('setItem', { productId, count });
  saveBasket(context);
}

export function removeProduct(context, productId) {
  context.commit('setItem', { productId, count: 0 });
  saveBasket(context);
}

export function emptyBasket(context) {
  context.commit('setItems', {});
  saveBasket(context);
}
