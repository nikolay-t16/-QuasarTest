const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
} = require('graphql');

const { BaseEntity } = require('typeorm');
// схема коллекции
class Rubric extends BaseEntity {
  constructor(params) {
    const {
      name = '',
      sort = '',
      show = false,
      parent_id = 0,
    } = params || {};
    super();
    this.name = name;
    this.sort = sort;
    this.show = show;
    this.parent_id = parent_id;
  }
}

Rubric.FIELD_ID = 'rubric_id';
Rubric.FIELD_NAME = 'name';
Rubric.PARENT_ID = 'parent_id';
Rubric.FIELD_SHOW = 'show';
Rubric.SORT = 'sort';

// определяем коллекцию Rubric и подключаем к ней схему
module.exports.Rubric = Rubric;

// тип для queries
module.exports.RubricType = new GraphQLObjectType({
  name: 'Rubric',
  fields: {
    rubric_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
    parent_id: {
      type: GraphQLInt,
    },
    show: {
      type: GraphQLBoolean,
    },
    sort: {
      type: GraphQLInt,
    },
  },
});
// тип для mutations
module.exports.RubricInput = new GraphQLInputObjectType({
  name: 'RubricInput',
  fields: {
    rubric_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
    parent_id: {
      type: GraphQLInt,
    },
    show: {
      type: GraphQLBoolean,
    },
    sort: {
      type: GraphQLInt,
    },
  },
});
