import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';
import { getRepository } from 'typeorm';
import { Product as ProductEntite } from '../../../entiti/Product';

// импортируем данные из models.js
import { ProductType } from '../type/productType';

// создаем поле для получения одного пользователя
export const Product = {
  type: ProductType, // тип для получения данных пользователя
  args: {
    // аргумент для поиска пользователь
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  // метод, в котором формируется запрос и возвращаются данные (root, params, options)
  async resolve(root, { id }, options) {
    const repository = getRepository(ProductEntite);
    return repository.findOne(id, { relations: ['rubrics'] });
  },
};
