import {
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';
import { getRepository } from 'typeorm';
import { RubricInput } from '../type';
import { RubricEntity } from '../../../entity/RubricEntity';

export const RubricEdit = {
  description: 'Edit rubric',
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(RubricInput),
    },
  },
  async resolve(root, params, options) {
    console.log(params.data);
    const id = params.data[RubricEntity.FIELD_ID];
    const values = { ...params.data };
    const repository = getRepository(RubricEntity);
    return repository
      .createQueryBuilder()
      .update(values)
      .where(`${RubricEntity.FIELD_ID} = :id`, { id })
      .execute()
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new Error('Error editing RubricEntity');
      });
  },
};
