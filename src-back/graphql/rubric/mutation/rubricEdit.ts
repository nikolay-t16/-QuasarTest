import {
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';
import { getRepository } from 'typeorm';
import { RubricInput } from '../type';
import { Rubric } from '../../../entiti/Rubric';

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
    const id = params.data[Rubric.FIELD_ID];
    const values = { ...params.data };
    const repository = getRepository(Rubric);
    return repository
      .createQueryBuilder()
      .update(values)
      .where(`${Rubric.FIELD_ID} = :id`, { id })
      .execute()
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new Error('Error editing Rubric');
      });

    // .update(params.data[Rubric.FIELD_ID], params.data).then(() => true)
    // .catch((e) => {
    //   console.log(e);
    //   throw new Error('Error edding Rubric');
    // });
  },
};
