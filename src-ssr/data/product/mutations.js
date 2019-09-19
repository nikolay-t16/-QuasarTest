const {
  GraphQLNonNull,
  GraphQLBoolean,
} = require('graphql');
const { ProductModel, ProductType, ProductInput } = require('./models');

const ProductCreate = {
  description: 'Create new Product',
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProductInput),
    },
  },
  async resolve(root, params, options) {
    const product = new ProductModel(params.data);
    const newProduct = await product.save();
    if (!newProduct) {
      throw new Error('Error adding new Product');
    }
    return true;
  },
};
module.exports = {
  ProductCreate,
};
