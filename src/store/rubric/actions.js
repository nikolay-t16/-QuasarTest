const axios = require('axios');

export async function getAllRubrics(context) {
  return axios.post('http://localhost:3001/graphql', {
    query: `{
        Rubrics{
          ${context.state.listFields.join(' ')}
          products {
            productId
          }
        }
      }`,
  })
    .then((res) => {
      if (res.status === 200) {
        context.commit('setAllRubrics', res.data.data.Rubrics);
      }
    })
    .catch(err => console.log(err));
}

export async function getRubric(context, options) {
  axios
    .post(
      'http://localhost:3001/graphql',
      {
        query: `{
          Rubric(id:${options.id}){ 
            ${context.state.allFields.join(' ')}
          } 
        }`,
      },
    )
    .then((res) => {
      context.commit('setRubric', res.data.data.Rubric);
    })
    .catch(err => console.log(err));
}

export async function removeRubric(context, options) {
  axios
    .post(
      'http://localhost:3001/graphql',
      {
        query: `mutation { RubricDelete (id:${options.id}) }`,
      },
    )
    .then(() => context.commit('removeRubric', options))
    .catch(err => console.log(err));
}

export async function editRubric(context, options) {
  const res = axios
    .post(
      'http://localhost:3001/graphql',
      {
        query: `mutation RubricEdit($rubric: RubricInput!)  {
            RubricEdit ( data: $rubric )
          }`,
        variables: {
          rubric: options,
        },
      },
    )
    .then(
      () => {
        context.commit('editRubric', options);
        context.dispatch('getRubric', { id: options.rubricId });
      },
    )
    .catch(err => ({
      result: false,
      error: err,
    }));
  return res;
}

export async function addRubric(context, options) {
  options.sort = +options.sort;
  const res = axios
    .post(
      'http://localhost:3001/graphql',
      {
        query: `mutation RubricAdd($rubric: RubricInput!)  {
            RubricAdd ( data: $rubric ){ id}
        }`,
        variables: {
          rubric: options,
        },
      },
    )
    .catch((err) => {
      console.log(err);
      return false;
    });
  return res;
}
