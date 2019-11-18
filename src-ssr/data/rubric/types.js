const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
} = require('graphql');
const fields = require('./fields');
const productFields = require('../product/fields');

const ProductType = new GraphQLObjectType({
  name: 'RubrucProducts',
  fields: productFields,
});

const fieldsType = Object.assign({ products: { type: new GraphQLList(ProductType) } }, fields);

// тип для queries
module.exports.RubricType = new GraphQLObjectType({
  name: 'Rubric',
  fields: fieldsType,
});
// тип для mutations
module.exports.RubricInput = new GraphQLInputObjectType({
  name: 'RubricInput',
  fields,
});
