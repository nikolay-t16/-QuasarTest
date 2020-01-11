import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Store from '../index';
import ProductData, {productDataFabric} from '../../../common/data/interface/ProductData';
import axios from "../../boot/axios";

@Module({
  dynamic: true,
  name: 'product',
  namespaced: true,
  store: Store
})
export default class ProductStore extends VuexModule {
  allProducts: ProductData[] = [];
  product?: ProductData;
  allFields: object = [
    'productId',
    'name',
    'price',
    'show',
    'code',
    'isNew',
    'isHit',
  ];
  filter: object = {
    minPrice: 0,
    maxPrice: null,
  };
  sort: object = {
    sortBy: null,
    sortDirect: 'ASC',
  };

  get getAllProducts() {
    return this.allProducts;
  }

  get getAllMapProducts() {
    const res = new Map();
    this.allProducts.forEach(item => res.set(item.productId, item));
    return res;
  }

  /*

  const getEmptyRubricProducts = () => ({
    items: [],
    maxPrice: null,
  });

   */

  /*
  const concatRubricProducts = (item1, item2) => {
    const res = Object.assign({}, item1);
    res.items = res.items.concat(item2.items);
    if (res.maxPrice === null || res.maxPrice < item2.maxPrice) {
      res.maxPrice = item2.maxPrice;
    }
    return res;
  };

   */

  isProdValidForFilter(prod, filter) {
    if (filter.minPrice !== null && +filter.minPrice > +prod.price) {
      return false;
    }
    if (filter.maxPrice !== null && +filter.maxPrice < +prod.price) {
      return false;
    }
    return true;
  }

  getRubricProducts(rubric, products, filter) {
    const res = getEmptyRubricProducts();
    if (rubric && rubric.products) {
      rubric.products.forEach(
        (item) => {
          if (products.has(+item.productId)) {
            const prod = products.get(+item.productId);
            if (isProdValidForFilter(prod, filter)) {
              res.items.push(prod);
            }
            if (res.maxPrice === null || res.maxPrice < prod.price) {
              res.maxPrice = prod.price;
            }
          }
        },
      );
    }
    return res;
  }

  getAllRubricProducts(
    rubricId,
    rubrics,
    products,
    rubricTree,
    filter,
    delteDuplicate = true,
  ) {
    let res = getEmptyRubricProducts();
    const rubric = rubrics && rubrics.has(+rubricId) ? rubrics.get(+rubricId) : null;

    if (rubric) {
      const rubricProducts = getRubricProducts(rubric, products, filter);
      res = concatRubricProducts(res, rubricProducts);
    }

    if (rubricTree.has(rubricId)) {
      rubricTree.get(rubricId).forEach(
        (subRub) => {
          const subRubricProducts = getAllRubricProducts(
            subRub.rubricId,
            rubrics,
            products,
            rubricTree,
            filter,
            false,
          );
          res = concatRubricProducts(res, subRubricProducts);
        },
      );
    }
    if (delteDuplicate) {
      // Удаление дублей
      res.items = Array.of(...new Set(Array.of(...res.items)));
    }
    return res;
  }

  /**
   *
   * @param state
   * @param getters
   * @param rootState
   * @param rootGetters
   * @returns {Array|Null}
   */
  export const productsByRubric = ( getters, rootState, rootGetters) => (id) => {
    const rubrics = rootGetters['rubric/allMapRubrics'];
    const rubricTree = rootGetters['rubric/rubricTree'];
    const res = getAllRubricProducts(
      +id,
      rubrics,
      getters.getAllMapProducts,
      rubricTree,
      this.filter,
    );
    if (this.sort.sortBy) {
      res.items = res.items.sort((a, b) => {
        const direct = this.sort.sortDirect === 'ASC' ? 1 : -1;
        let val1 = a[this.sort.sortBy];
        let val2 = b[this.sort.sortBy];
        if (this.sort.sortBy === 'price') {
          val1 = +val1;
          val2 = +val2;
        }
        if (val1 > val2) return direct;
        if (val1 === val2) return 0;
        return -direct;
      });
    }
    return res;
  };

  get getProduct() {
    return this.product;
  }

  get newProducts() {
    return this.allProducts.filter(item => item.isNew);
  }

  get hitProducts() {
    return this.allProducts.filter(item => item.isHit);
  }

  get getListFields() {
    return this.listFields;
  }

  get getAllFields() {
    return this.allFields;
  }

  get getSort() {
    return this.sort;
  }

  @Mutation
  public setAllProducts(payload) {
    this.allProducts = payload;
  }

  @Mutation
  public setProduct( payload) {
    this.product = payload;
  }

  @Mutation
  public removeProductMutation(payload) {
    const index = this.allProducts.indexOf(payload);
    if (index > -1) {
      this.allProducts.splice(index, 1);
    }
  }

  @Mutation
  public editProductMutation(payload) {
    for (let i = 0; i < this.allProducts.length; i += 1) {
      if (this.allProducts[i].productId === payload.id) {
        this.allProducts[i][payload.field] = payload.value;
        return;
      }
    }
  }

  @Mutation
  public filterMutation(payload) {
    this.filter = payload;
  }

  @Mutation
  public resetFilterMutation(state) {
    this.filter = {};
  }

  @Mutation
  public sortMutation(payload) {
    if (this.sort.sortBy !== payload) {
      this.sort = {
        sortBy: payload,
        sortDirect: 'ASC',
      };
    } else {
      this.sort = {
        sortBy: payload,
        sortDirect: this.sort.sortDirect === 'ASC' ? 'DESC' : 'ASC',
      };
    }
  }

  @Mutation
  public resetSortMutation(state) {
    this.sort = {};
  }

  @Action
  async getAllProductss() {
    const productFields = Object.values(this.allFields).join(' ');
    axios.post('http://localhost:3001/graphql', {
      query: `{
        Products{ ${productFields}  }
      }`,
    })
      .then((res) => {
        if (res.status === 200) {
          this.setAllProducts(res.data.data.Products);
        }
      })
      .catch(err => console.log(err));
  }

  @Action
  async getProductt(options) {
    const productFields = Object.values(this.allFields).join(' ');
    const rubricFieldId = context.rootGetters['rubric/allFields'].FIELD_ID; /*???*/
    axios
      .post(
        'http://localhost:3001/graphql',
        {
          query: `{
          Product(id:${options.productId}) { 
            ${productFields} 
            rubrics {
              ${rubricFieldId} 
            }
          } 
        }`,
        },
      )
      .then((res) => {
        this.setProduct(res.data.data.Product);
      })
      .catch(err => console.log(err));
  }

  @Action
  async removeProduct(options) {
    axios
      .post(
        'http://localhost:3001/graphql',
        {
          query: `mutation { ProductDelete (id:${options.productId}) }`,
        },
      )
      .then(() => this.removeProductMutation(options))
      .catch(err => console.log(err));
  }

  @Action
  async editProductField(options) {
    axios
      .post(
        'http://localhost:3001/graphql',
        {
          query: `mutation { ProductEditField (id:${options.id}, field: "${options.field}", value: "${options.value}") }`,
        },
      )
      .then(() => this.editProductMutation(options))
      .catch(err => console.log(err));
  }

  @Action
  async editProduct(options) {
    options.price = +options.price;
    const res = axios
      .post(
        'http://localhost:3001/graphql',
        {
          query: `mutation ProductEdit($product: ProductInput!)  {
            ProductEdit ( data: $product )
          }`,
          variables: {
            product: options,
          },
        },
      )
      .then(
        () => {
          this.editProductMutation(options);
          this.getProductt({ id: options.productId });
        },
      )
      .catch((err) => {
        console.log(err);
        return {
          result: false,
          error: err,
        };
      });
    return res;
  }

  @Action
  async addProduct(options) {
    options.price = +options.price;
    if (!options.code) {
      options.code = null;
    }
    const res = axios
      .post(
        'http://localhost:3001/graphql',
        {
          query: `mutation ProductAdd($product: ProductInput!)  {
            ProductAdd ( data: $product ){ productId}
        }`,
          variables: {
            product: options,
          },
        },
      )
      .catch((err) => {
        console.log(err);
        return false;
      });
    return res;
  }

  @Action
  filterAction(options = {}) {
    const {
      minPrice = 0,
      maxPrice = null,
    } = options;
    this.filterMutation({ minPrice, maxPrice });
  }

  @Action
  resetFilter(options = {}) {
    const {
      minPrice = 0,
      maxPrice = null,
    } = options;
    this.resetFilterMutation({ minPrice, maxPrice });
  }

  @Action
  sortProducts( options) {
    this.sortMutation(options);
  }

  @Action
  resetSort() {
    this.resetSort();
  }

}
