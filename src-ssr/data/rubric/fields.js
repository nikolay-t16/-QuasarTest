const {
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');
const { Rubric } = require('../../models');

module.exports = {
  [Rubric.FIELD_ID]: {
    type: GraphQLInt,
  },
  [Rubric.FIELD_NAME]: {
    type: GraphQLString,
  },
  [Rubric.FIELD_PARENT_ID]: {
    type: GraphQLInt,
  },
  [Rubric.FIELD_SHOW]: {
    type: GraphQLBoolean,
  },
  [Rubric.FIELD_SORT]: {
    type: GraphQLInt,
  },
};
