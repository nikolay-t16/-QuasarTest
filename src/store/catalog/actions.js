const axios = require('axios');

export async function getCatalog(context) {
  console.log('getCatalog');
  console.log(context.rootGetters);
  return axios.post('http://localhost:3001/graphql', {
    query: `{
        Rubrics{
          ${context.rootGetters['rubric/listFields'].join(' ')}
          products {
            productId
          }
        }
         Products{ ${context.rootGetters['product/listFields'].join(' ')} } 
      }`,
  })
    .then((res) => {
      if (res.status === 200) {
        context.commit('rubric/setAllRubrics', res.data.data.Rubrics, { root: true });
        context.commit('product/setAllProducts', res.data.data.Products, { root: true });
      }
    })
    .catch(err => console.log(err));
}
