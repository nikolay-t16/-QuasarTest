import {
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
} from 'graphql';

export default {
  productId: {
    type: GraphQLInt,
  },
  name: {
    type: GraphQLString,
  },
  price: {
    type: GraphQLFloat,
  },
  show: {
    type: GraphQLBoolean,
  },
  code: {
    type: GraphQLString,
  },
  isNew: {
    type: GraphQLBoolean,
  },
  isHit: {
    type: GraphQLBoolean,
  },
};
