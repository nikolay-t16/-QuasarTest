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
      isNew = false,
      isHit = false,
    } = params || {};
    super();
    this.name = name;
    this.code = code;
    this.show = show;
    this.price = price;
    this.isNew = isNew;
    this.isHit = isHit;
  }
}

Product.FIELD_ID = 'id';
Product.FIELD_NAME = 'name';
Product.FIELD_PRICE = 'price';
Product.FIELD_SHOW = 'show';
Product.FIELD_CODE = 'code';
Product.FIELD_IS_NEW = 'isNew';
Product.FIELD_IS_HIT = 'isHit';

// определяем коллекцию Product и подключаем к ней схему
module.exports.Product = Product;

const fields = {
  [Product.FIELD_ID]: {
    type: new GraphQLNonNull(GraphQLID),
  },
  [Product.FIELD_NAME]: {
    type: GraphQLString,
  },
  [Product.FIELD_PRICE]: {
    type: GraphQLFloat,
  },
  [Product.FIELD_SHOW]: {
    type: GraphQLBoolean,
  },
  [Product.FIELD_CODE]: {
    type: GraphQLString,
  },
  [Product.FIELD_IS_NEW]: {
    type: GraphQLBoolean,
  },
  [Product.FIELD_IS_HIT]: {
    type: GraphQLBoolean,
  },
};

// тип для queries
module.exports.ProductType = new GraphQLObjectType({
  name: 'Product',
  fields,
});
// тип для mutations
module.exports.ProductInput = new GraphQLInputObjectType({
  name: 'ProductInput',
  fields,
});
