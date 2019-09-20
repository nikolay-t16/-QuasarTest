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
    .then((response) => {
      if (response.status === 200) {
        context.commit('setAllProducts', response.data.data.Products);
      }
    })
    .catch(err => console.log(err));
}

export async function removeProduct(context, item) {
  context.commit('removeProduct', item);
}

export async function editProductField(context, options) {
  axios
    .post(
      'http://localhost:3001/graphql',
      {
        query: `mutation { ProductEditField (id:${options.id}, field: "${options.field}", value: "${options.value}") }`,
      },
    )
    .then(res => console.log(res))
    .catch(err => console.log(err));
  context.commit('editProduct', options);
}
