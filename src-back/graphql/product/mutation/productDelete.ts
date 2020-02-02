import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';
import { getRepository } from 'typeorm';
import ProductEntity from '../../../entity/ProductEntity';

export const ProductDelete = {
  description: 'Delete product',
  type: GraphQLBoolean,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  async resolve(root, { id }, options) {
    const repository = getRepository(ProductEntity);
    return repository
      .delete(id)
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new Error('Error deleting Product');
      });
  },
};
