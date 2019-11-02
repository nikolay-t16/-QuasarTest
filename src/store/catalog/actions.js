const axios = require('axios');

export async function getCatalog(context) {
  return axios.post('http://localhost:3001/graphql', {
    query: `{
        Rubrics{
          id
          parent_id
          name
          show
          sort
          products {
            id
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
