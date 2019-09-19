const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');
const { getConnection } = require('typeorm');

// импортируем данные из models.js
const { Product, ProductType } = require('./models');

console.log(ProductType);
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
    return Product.findOne(params.id); // возвращаем JSON
  },
};
module.exports.Products = {
  type: new GraphQLList(ProductType),
  args: {},
  resolve(root, params, options) {
    const connection = getConnection();
    const postRepository = connection.getRepository(Product);
    const
    return postRepository.find();
  },
};
