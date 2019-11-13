const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

// импортируем данные из models.js
const { RubricType } = require('./types');
const { Rubric, Product } = require('../../models');

// создаем поле для получения одного пользователя
module.exports.Rubric = {
  type: RubricType, // тип для получения данных пользователя
  args: {
    // аргумент для поиска пользователь
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  // метод, в котором формируется запрос и возвращаются данные (root, params, options)
  async resolve(root, params, options) {
    return Rubric.findByPk(params.id);
  },
};
module.exports.Rubrics = {
  type: new GraphQLList(RubricType),
  args: {},
  resolve(root, params, options) {
    return Rubric.findAll({
      order: [[Rubric.FIELD_ID, 'ASC']],
      include: [{
        model: Product,
        as: 'products',
        required: false,
      }],
    });
  },
};
