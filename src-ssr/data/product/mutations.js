const {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
} = require('graphql');
const { getConnection } = require('typeorm');
const { Product, ProductType, ProductInput } = require('./models');

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
    const product = new Product(params.data);
    const newProduct = await product.save();
    if (!newProduct) {
      throw new Error('Error adding new Product');
    }
    return newProduct;
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
    try {
      await Product
        .update(
          params.data.id,
          params.data,
        );
    } catch (e) {
      console.log(e);
      throw new Error('Error edding Product');
    }
    return true;
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
    try {
      await Product
        .update(
          params.id,
          { [params.field]: params.value },
        );
    } catch (e) {
      throw new Error('Error edding Product');
    }
    return true;
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
    try {
      await Product
        .delete(params.id);
    } catch (e) {
      throw new Error('Error deleting Product');
    }
    return true;
  },
};

module.exports = {
  ProductAdd,
  ProductEdit,
  ProductEditField,
  ProductDelete,
};
