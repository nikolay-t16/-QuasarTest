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
  constructor(params) {
    const {
      name = '',
      code = '',
      show = false,
      price = 0,
    } = params || {};
    super();
    this.name = name;
    this.code = code;
    this.show = show;
    this.price = price;
  }
}

Product.FIELD_ID = 'product_id';
Product.FIELD_NAME = 'name';
Product.FIELD_PRICE = 'price';
Product.FIELD_SHOW = 'show';
Product.FIELD_CODE = 'code';

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
