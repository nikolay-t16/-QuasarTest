const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
} = require('graphql');
const fields = require('./fields');
const rubricFields = require('../rubric/fields');

const RubricType = new GraphQLObjectType({
  name: 'ProductRubrucs',
  fields: rubricFields,
});
const fieldsType = Object.assign({ rubrics: { type: new GraphQLList(RubricType) } }, fields);
// тип для queries
module.exports.ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: fieldsType,
});
// тип для mutations
module.exports.ProductInput = new GraphQLInputObjectType({
  name: 'ProductInput',
  fields,
});
