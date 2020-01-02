import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import { getRepository } from 'typeorm';
import { Rubric as RubricEntite } from '../../entities/rubric';

// импортируем данные из models.js
import { RubricType } from './types';

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
    console.log(options);
    const repository = getRepository(RubricEntite);
    return repository.findOne(id, { relations: ['products'] });
  },
};
export const Rubrics = {
  type: new GraphQLList(RubricType),
  args: {},
  resolve(root, params, options) {
    const repository = getRepository(RubricEntite);
    return repository.find();
  },
};

export default {
  Rubric,
  Rubrics,
};
