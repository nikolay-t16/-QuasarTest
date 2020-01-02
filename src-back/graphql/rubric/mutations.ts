import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';
import { RubricType, RubricInput } from './types';


const RubricAdd = {
  description: 'Create new Rubric',
  type: RubricType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(RubricInput),
    },
  },
  async resolve(root, params, options) {
    return true;
  },
};

const RubricEdit = {
  description: 'Edit rubric',
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(RubricInput),
    },
  },
  async resolve(root, params, options) {
    return true;
  },
};

const RubricDelete = {
  description: 'Delete rubric',
  type: GraphQLBoolean,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  async resolve(root, params, options) {
    return true;
  },
};

export default {
  RubricAdd,
  RubricEdit,
  RubricDelete,
};
