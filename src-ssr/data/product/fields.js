const {
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLID,
} = require('graphql');
const { Product } = require('../../models');

module.exports = {
  [Product.FIELD_ID]: {
    type: GraphQLID,
  },
  [Product.FIELD_NAME]: {
    type: GraphQLString,
  },
  [Product.FIELD_PRICE]: {
    type: GraphQLFloat,
  },
  [Product.FIELD_SHOW]: {
    type: GraphQLBoolean,
  },
  [Product.FIELD_CODE]: {
    type: GraphQLString,
  },
  [Product.FIELD_IS_NEW]: {
    type: GraphQLBoolean,
  },
  [Product.FIELD_IS_HIT]: {
    type: GraphQLBoolean,
  },
};
