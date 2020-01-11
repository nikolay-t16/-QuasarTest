import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Store from '../index';
import axios from "../../boot/axios";

@Module({
  dynamic: true,
  name: 'basket',
  namespaced: true,
  store: Store
})
export default class BasketStore extends VuexModule {
  items: {};
  favorites: {};

  get basket(getters, rootState, rootGetters) {
    const allPproducts = rootGetters['product/allMapProducts'];
    const items = {};
    const favorites = {};
    let totalCount = 0;
    let totalPrice = 0;
    const products = [];
    // eslint-disable-next-line array-callback-return
    Object.entries(this.items).map(([productId, count]) => {
      if (allPproducts.has(+productId)) {
        const product = allPproducts.get(+productId);
        items[+productId] = count;
        products.push(product);
        totalCount += +count;
        totalPrice += count * product.price;
      }
    });
    // eslint-disable-next-line array-callback-return
    Object.entries(this.favorites).map(([productId, count]) => {
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

  @Mutation
  setItemsMutation(items) {
    this.items = items || {};
  }

  @Mutation
  setItemMutation({ productId, count }) {
    if (+count > 0) {
      this.items[+productId] = +count;
    } else if (+count === 0) {
      delete this.items[+productId];
    }
  }

  @Mutation
  setFavoritesMutation(favorites) {
    this.favorites = favorites || {};
  }

  @Mutation
  setFavoriteMutation({ productId, count }) {
    if (+count > 0) {
      this.favorites[+productId] = 1;
    } else if (+count === 0) {
      delete this.favorites[+productId];
    }
  }

  @Action
  saveBasket(context) {
    localStorage.setItem(lsBasket, JSON.stringify(context.state.items));
  }

  @Action
  getBasket() {
    const lsBasketStr = localStorage.getItem(lsBasket);
    this.setItemsMutation(JSON.parse(localStorage.getItem(lsBasket)));
  }

  @Action
  addProduct({ productId, count }) {
    this.setItemMutation({ productId, count });
    saveBasket(context);
  }

  @Action
  removeProduct(productId) {
    this.setItemMutation({ productId, count: 0 });
    saveBasket(context);
  }

  @Action
  emptyBasket() {
    this.setItemsMutation({});
    saveBasket(context);
  }

  @Action
  getFavorites() {
    this.setFavoritesMutation(JSON.parse(localStorage.getFavorite(lsBasket)));
  }

  @Action
  addFavProduct({ productId, count }) {
    this.setFavoriteMutation({ productId, count });
    saveBasket(context);
  }

  @Action
  removeFavProduct(productId) {
    this.setFavoriteMutation({ productId, count: 0 });
    saveBasket(context);
  }

}
