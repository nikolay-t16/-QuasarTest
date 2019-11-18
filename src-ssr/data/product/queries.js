const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

// импортируем данные из models.js
const { ProductType } = require('./types');
const { Product, Rubric } = require('../../models');

// создаем поле для получения одного пользователя
module.exports.Product = {
  type: ProductType, // тип для получения данных пользователя
  args: {
    // аргумент для поиска пользователь
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  // метод, в котором формируется запрос и возвращаются данные (root, params, options)
  resolve(root, params, options) {
    return Product.findByPk(params.id); // возвращаем JSON
  },
};
module.exports.Products = {
  type: new GraphQLList(ProductType),
  args: {},
  resolve(root, params, options) {
    return Product.findAll({
      order: [[Product.FIELD_ID, 'ASC']],
      include: [{
        model: Rubric,
        as: 'rubrics',
        required: false,
      }],
    });
  },
};
