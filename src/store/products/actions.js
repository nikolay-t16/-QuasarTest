const axios = require('axios');

export async function getAllProducts(context) {
  axios.post('http://localhost:3001/graphql', {
    query: `{
        Products{
          product_id
          name
          price
          show
          code
        }
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
  axios
    .post(
      'http://localhost:3001/graphql',
      {
        query: `{
          Product(id:${options.product_id}){ 
            product_id
            name
            price
            show
            code
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
        query: `mutation { ProductDelete (id:${options.product_id}) }`,
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
        context.dispatch('getProduct', { product_id: options.product_id });
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
            ProductAdd ( data: $product ){ product_id}
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
