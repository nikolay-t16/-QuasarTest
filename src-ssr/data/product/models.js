const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} = require('graphql');

const { BaseEntity } = require('typeorm');
// схема коллекции
class Product extends BaseEntity {
  constructor(id, name) {
    super();
    this.productId = id;
    this.name = name;
  }
}
// определяем коллекцию Product и подключаем к ней схему
module.exports.Product = Product;

// тип для queries
module.exports.ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    productId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
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
