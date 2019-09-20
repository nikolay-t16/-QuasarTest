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
