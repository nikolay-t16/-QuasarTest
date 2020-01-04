import {
  GraphQLInputObjectType,
} from 'graphql';
import fields from '../field';

// тип для mutations
export const RubricInput = new GraphQLInputObjectType({
  name: 'RubricInput',
  fields,
});
