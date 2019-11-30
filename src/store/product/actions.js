const axios = require('axios');

export async function getAllProducts(context) {
  const productFields = Object.values(context.state.allFields).join(' ');
  axios.post('http://localhost:3001/graphql', {
    query: `{
        Products{ ${productFields}  }
      }`,
  })
    .then((res) => {
      if (res.status === 200) {
        context.commit('setAllProducts', res.data.data.Products);
      }
    })
    .catch(err => console.log(err));
}

export async function getProduct(context, options) {
  const productFields = Object.values(context.state.allFields).join(' ');
  const rubricFieldId = context.rootGetters['rubric/allFields'].FIELD_ID;
  axios
    .post(
      'http://localhost:3001/graphql',
      {
        query: `{
          Product(id:${options.id}) { 
            ${productFields} 
            rubrics {
              ${rubricFieldId} 
            }
          } 
        }`,
      },
    )
    .then((res) => {
      context.commit('setProduct', res.data.data.Product);
    })
    .catch(err => console.log(err));
}

export async function removeProduct(context, options) {
  axios
    .post(
      'http://localhost:3001/graphql',
      {
        query: `mutation { ProductDelete (id:${options.productId}) }`,
      },
    )
    .then(() => context.commit('removeProduct', options))
    .catch(err => console.log(err));
}

export async function editProductField(context, options) {
  axios
    .post(
      'http://localhost:3001/graphql',
      {
        query: `mutation { ProductEditField (id:${options.id}, field: "${options.field}", value: "${options.value}") }`,
      },
    )
    .then(() => context.commit('editProduct', options))
    .catch(err => console.log(err));
}

export async function editProduct(context, options) {
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
        context.commit('editProduct', options);
        context.dispatch('getProduct', { id: options.productId });
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

export async function addProduct(context, options) {
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

export function filter(context, options = {}) {
  const {
    minPrice = 0,
    maxPrice = null,
  } = options;
  context.commit('filter', { minPrice, maxPrice });
}

export function resetFilter(context, options = {}) {
  const {
    minPrice = 0,
    maxPrice = null,
  } = options;
  context.commit('resetFilter', { minPrice, maxPrice });
}
