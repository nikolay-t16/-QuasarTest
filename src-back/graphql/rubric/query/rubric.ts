import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';
import { getRepository } from 'typeorm';
import { Rubric as RubricEntite } from '../../../entiti/Rubric';

// импортируем данные из models.js
import { RubricType } from '../type/rubricType';

// создаем поле для получения одного пользователя
export const Rubric = {
  type: RubricType, // тип для получения данных пользователя
  args: {
    // аргумент для поиска пользователь
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  // метод, в котором формируется запрос и возвращаются данные (root, params, options)
  async resolve(root, { id }, options) {
    const repository = getRepository(RubricEntite);
    return repository.findOne(id, { relations: ['products'] });
  },
};
