import { Action, Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators';
import Store from '../index';
import ProductStore from "./ProductStore";
import axios from "../../boot/axios";
import ProductData from "../../../common/data/interface/ProductData";

const productStore =  getModule(ProductStore);

@Module({
  dynamic: true,
  name: 'basket',
  namespaced: true,
  store: Store
})
export default class BasketStore extends VuexModule {

  public items: number[] = [];
  public favorites: number[] = [];
  protected readonly lsBasket: string = 'basket';

  public get basket() {
    const allProducts = productStore.allMapProducts;
    const items = {};
    const favorites = {};
    let totalCount = 0;
    let totalPrice = 0;
    const products: ProductData[] = [];
    // eslint-disable-next-line array-callback-return
    Object.entries(this.items).map(([productId, count]) => {
      if (allProducts.has(productId)) {
        const product = allProducts.get(productId);
        items[+productId] = count;
        products.push(product);
        totalCount += count;
        totalPrice += count * product.price;
      }
    });
    // eslint-disable-next-line array-callback-return
    Object.entries(this.favorites).map(([productId, count]) => {
      if (allProducts.has(productId)) {
        favorites[productId] = count;
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

  public saveBasket(context): void {
    localStorage.setItem(lsBasket, JSON.stringify(this.items));
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
