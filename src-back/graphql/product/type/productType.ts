import {
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';
import fields from '../field';
import rubricFields from '../../rubric/field';

const RubricType = new GraphQLObjectType({
  name: 'RubricProducts',
  fields: rubricFields,
});

const fieldsType = Object.assign({ rubrics: { type: new GraphQLList(RubricType) } }, fields);

// тип для queries
export const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: fieldsType,
});
