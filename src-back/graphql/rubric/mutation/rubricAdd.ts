import {
  GraphQLNonNull,
} from 'graphql';
import { getRepository } from 'typeorm';
import { RubricType, RubricInput } from '../type';
import { RubricEntity } from '../../../entity/RubricEntity';

export const RubricAdd = {
  description: 'Create new RubricEntity',
  type: RubricType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(RubricInput),
    },
  },
  async resolve(root, { data }, options) {
    const repository = getRepository(RubricEntity);
    return repository
      .createQueryBuilder()
      .insert()
      .values({ ...data })
      .returning('*')
      .execute()
      .then(_ => _.raw[0])
      .catch((e) => {
        console.log(e);
        throw new Error('Error deleting RubricEntity');
      });
  },
};
