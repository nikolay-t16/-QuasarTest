import {
  GraphQLList,
} from 'graphql';
import { getRepository } from 'typeorm';
import { Rubric as RubricEntite } from '../../../entiti/Rubric';

// импортируем данные из models.js
import { RubricType } from '../type/rubricType';

// создаем поле для получения одного пользователя
export const Rubrics = {
  type: new GraphQLList(RubricType),
  args: {},
  resolve(root, params, options) {
    const repository = getRepository(RubricEntite);
    return repository.find({ relations: ['products'] });
  },
};
