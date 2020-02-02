import {
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';
import { getRepository } from 'typeorm';
import { ProductInput } from '../type';
import ProductEntity from '../../../entity/ProductEntity';

export const ProductEdit = {
  description: 'Edit product',
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProductInput),
    },
  },
  async resolve(root, params, options) {
    console.log(params.data);
    const id = params.data[ProductEntity.FIELD_ID];
    const values = { ...params.data };
    const repository = getRepository(ProductEntity);
    return repository
      .createQueryBuilder()
      .update(values)
      .where(`${ProductEntity.FIELD_ID} = :id`, { id })
      .execute()
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new Error('Error editing Product');
      });
  },
};
