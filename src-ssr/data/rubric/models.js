const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
} = require('graphql');

const { BaseEntity } = require('typeorm');
const { ProductType } = require('../product/models');
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

Rubric.FIELD_ID = 'id';
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
    id: {
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
    products: {
      type: new GraphQLList(ProductType),
    },
  },
});
// тип для mutations
module.exports.RubricInput = new GraphQLInputObjectType({
  name: 'RubricInput',
  fields: {
    id: {
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
