import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import Rubric from './rubric';


const queries = Object.assign({}, Rubric.Query);
const mutation = Object.assign({}, Rubric.Mutation);

// создадим GraphQL схему и заполним параметрами
// каждый параметр может содержать только один GraphQLObjectType
export default new GraphQLSchema(
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
