import {
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';
import { getRepository } from 'typeorm';
import { ProductInput } from '../type';
import { Product } from '../../../entiti/Product';

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
    const id = params.data[Product.FIELD_ID];
    const values = { ...params.data };
    const repository = getRepository(Product);
    return repository
      .createQueryBuilder()
      .update(values)
      .where(`${Product.FIELD_ID} = :id`, { id })
      .execute()
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new Error('Error editing Product');
      });
  },
};
