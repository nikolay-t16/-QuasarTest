import {
  GraphQLInputObjectType,
} from 'graphql';
import fields from '../field';

// тип для mutations
export const ProductInput = new GraphQLInputObjectType({
  name: 'ProductInput',
  fields,
});
