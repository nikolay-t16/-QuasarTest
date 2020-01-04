import {
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';


export default {
  rubricId: {
    type: GraphQLInt,
  },
  name: {
    type: GraphQLString,
  },
  parentId: {
    type: GraphQLInt,
  },
  show: {
    type: GraphQLBoolean,
  },
  sort: {
    type: GraphQLInt,
  },
};
