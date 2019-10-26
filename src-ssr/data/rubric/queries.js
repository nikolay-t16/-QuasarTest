const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

// импортируем данные из models.js
const { Rubric, RubricType } = require('./models');

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
    return Rubric.findOne(params.id, { relations: ['products'] });
  },
};
module.exports.Rubrics = {
  type: new GraphQLList(RubricType),
  args: {},
  resolve(root, params, options) {
    return Rubric.find({
      relations: ['products'],
      order: {
        [Rubric.FIELD_ID]: 'ASC',
      },
    });
  },
};
