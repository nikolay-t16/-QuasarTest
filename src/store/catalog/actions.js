const axios = require('axios');

export async function getCatalog(context) {
  const productFields = Object.values(context.rootGetters['product/listFields']).join(' ');
  const rubricFields = Object.values(context.rootGetters['rubric/listFields']).join(' ');
  const productFieldId = context.rootGetters['product/allFields'].FIELD_ID;
  return axios.post('http://localhost:3001/graphql', {
    query: `{
        Rubrics{
          ${rubricFields}
          products {
            ${productFieldId}
          }
        }
         Products{ ${productFields} } 
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
