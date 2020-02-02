import {
  GraphQLList,
} from 'graphql';
import { getRepository } from 'typeorm';
import ProductEntity from '../../../entity/ProductEntity';

// импортируем данные из models.js
import { ProductType } from '../type/productType';

// создаем поле для получения одного пользователя
export const Products = {
  type: new GraphQLList(ProductType),
  args: {},
  resolve(root, params, options) {
    const repository = getRepository(ProductEntity);
    return repository.find({ relations: ['rubrics'] });
  },
};
