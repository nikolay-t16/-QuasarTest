const {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
  GraphQLID,
} = require('graphql');

const { ProductType, ProductInput } = require('./types');
const { Product } = require('../../models');

const ProductAdd = {
  description: 'Create new Product',
  type: ProductType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProductInput),
    },
  },
  async resolve(root, params, options) {
    return Product.create(params.data).catch((e) => {
      console.log(e);
      throw new Error('Error createing Product');
    });
  },
};

const ProductEdit = {
  description: 'Edit product',
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProductInput),
    },
  },
  async resolve(root, params, options) {
    return Product
      .update(
        params.data,
        {
          where: { productId: params.data.productId },
          limit: 1,
        },
      )
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new Error('Error edding Product');
      });
  },
};

const ProductEditField = {
  description: 'Edit product field',
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
    return Product
      .update(
        { [params.field]: params.value },
        {
          where: { productId: params.id },
          limit: 1,
        },
      )
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new Error('Error editing product field');
      });
  },
};
const ProductDelete = {
  description: 'Delete product',
  type: GraphQLBoolean,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  async resolve(root, params, options) {
    return Product
      .destroy({
        where: { productId: params.id },
        limit: 1,
      })
      .then(() => true)
      .catch((e) => {
        console.log(e);
        throw new Error('Error deleting Product');
      });
  },
};

module.exports = {
  ProductAdd,
  ProductEdit,
  ProductEditField,
  ProductDelete,
};
