const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const ProductQueries = require('./product/queries');
const ProductMutations = require('./product/mutations');
const RubricQueries = require('./rubric/queries');
const RubricMutations = require('./rubric/mutations');

const queries = Object.assign({}, RubricQueries, ProductQueries);
const mutation = Object.assign({}, ProductMutations, RubricMutations);

// создадим GraphQL схему и заполним параметрами
// каждый параметр может содержать только один GraphQLObjectType
module.exports = new GraphQLSchema(
  {
    query: new GraphQLObjectType({
      name: 'Query', // произвольное имя для API библиотеки
      fields: queries, // поля из файла queries.js
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: mutation,
    }),
  },
);
