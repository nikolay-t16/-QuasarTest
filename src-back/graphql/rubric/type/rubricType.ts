import {
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';
import fields from '../field';
import productFields from '../../product/field';

const ProductType = new GraphQLObjectType({
  name: 'RubrucProducts',
  fields: productFields,
});

const fieldsType = Object.assign({ products: { type: new GraphQLList(ProductType) } }, fields);

// тип для queries
export const RubricType = new GraphQLObjectType({
  name: 'Rubric',
  fields: fieldsType,
});
