import {
  GraphQLList,
} from 'graphql';
import { getRepository } from 'typeorm';
import { Product as ProductEntite } from '../../../entiti/Product';

// импортируем данные из models.js
import { ProductType } from '../type/productType';

// создаем поле для получения одного пользователя
export const Products = {
  type: new GraphQLList(ProductType),
  args: {},
  resolve(root, params, options) {
    const repository = getRepository(ProductEntite);
    return repository.find({ relations: ['rubrics'] });
  },
};
