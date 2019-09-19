const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLID,
} = require('graphql');

const { BaseEntity } = require('typeorm');
// схема коллекции
class Product extends BaseEntity {
  constructor(id, name) {
    super();
    this.product_id = id;
    this.name = name;
  }
}
// определяем коллекцию Product и подключаем к ней схему
module.exports.Product = Product;

// тип для queries
module.exports.ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    product_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLFloat,
    },
    show: {
      type: GraphQLBoolean,
    },
    code: {
      type: GraphQLString,
    },
  },
});
// тип для mutations
module.exports.ProductInput = new GraphQLInputObjectType({
  name: 'ProductInput',
  fields: {
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
  },
});
