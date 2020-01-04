import {
  GraphQLNonNull,
} from 'graphql';
import { getRepository } from 'typeorm';
import { ProductType, ProductInput } from '../type';
import { Product } from '../../../entiti/Product';

export const ProductAdd = {
  description: 'Create new Product',
  type: ProductType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProductInput),
    },
  },
  async resolve(root, { data }, options) {
    const repository = getRepository(Product);
    return repository
      .createQueryBuilder()
      .insert()
      .values({ ...data })
      .returning(Product.FIELD_ID)
      .execute()
      .then(_ => _.raw[0])
      .catch((e) => {
        console.log(e);
        throw new Error('Error deleting Product');
      });
  },
};
