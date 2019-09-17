const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const ProductQueries = require('./product/queries');
const ProductMutations = require('./product/mutations');


// создадим GraphQL схему и заполним параметрами
// каждый параметр может содержать только один GraphQLObjectType
module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query', // произвольное имя для API библитеки
    fields: ProductQueries, // поля из файла queries.js
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: ProductMutations,
  }),
});
