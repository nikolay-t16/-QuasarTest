const {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
  GraphQLID,
} = require('graphql');
const { RubricType, RubricInput } = require('./types');
const { Rubric } = require('../../models');

const RubricAdd = {
  description: 'Create new Rubric',
  type: RubricType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(RubricInput),
    },
  },
  async resolve(root, params, options) {
    return Rubric.create(params.data).catch((e) => {
      console.log(e);
      throw new Error('Error createing Rubric');
    });
  },
};

const RubricEdit = {
  description: 'Edit rubric',
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(RubricInput),
    },
  },
  async resolve(root, params, options) {
    return Rubric
      .update(
        params.data,
        {
          where: { [Rubric.FIELD_ID]: params.data[Rubric.FIELD_ID] },
          limit: 1,
        },
      )
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new Error('Error edding Rubric');
      });
  },
};

const RubricDelete = {
  description: 'Delete rubric',
  type: GraphQLBoolean,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  async resolve(root, params, options) {
    return Rubric
      .destroy({
        where: { [Rubric.FIELD_ID]: params[Rubric.FIELD_ID] },
        limit: 1,
      })
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new Error('Error deleting Rubric');
      });
  },
};

module.exports = {
  RubricAdd,
  RubricEdit,
  RubricDelete,
};
