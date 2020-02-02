import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';
import { getRepository } from 'typeorm';
import { RubricEntity } from '../../../entity/RubricEntity';

export const RubricDelete = {
  description: 'Delete rubric',
  type: GraphQLBoolean,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  async resolve(root, { id }, options) {
    const repository = getRepository(RubricEntity);
    return repository
      .delete(id)
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new Error('Error deleting RubricEntity');
      });
  },
};
