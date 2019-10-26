const {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
} = require('graphql');
const { getConnection } = require('typeorm');
const { Rubric, RubricType, RubricInput } = require('./models');

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
    const rubric = new Rubric(params.data);
    const newRubric = await rubric.save();
    if (!newRubric) {
      throw new Error('Error adding new Rubric');
    }
    return newRubric;
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
    try {
      await Rubric
        .update(
          params.data.id,
          params.data,
        );
    } catch (e) {
      console.log(e);
      throw new Error('Error edding Rubric');
    }
    return true;
  },
};

const RubricEditField = {
  description: 'Edit rubric field',
  type: GraphQLBoolean,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
    field: {
      name: 'field',
      type: GraphQLString,
    },
    value: {
      name: 'value',
      type: GraphQLString,
    },
  },
  async resolve(root, params, options) {
    try {
      await Rubric
        .update(
          params.id,
          { [params.field]: params.value },
        );
    } catch (e) {
      throw new Error('Error edding Rubric');
    }
    return true;
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
    try {
      await Rubric
        .delete(params.id);
    } catch (e) {
      throw new Error('Error deleting Rubric');
    }
    return true;
  },
};

module.exports = {
  RubricAdd,
  RubricEdit,
  RubricEditField,
  RubricDelete,
};
