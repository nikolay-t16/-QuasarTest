const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rubric extends Model {}

  Rubric.FIELD_ID = 'rubricId';
  Rubric.FIELD_PARENT_ID = 'parentId';
  Rubric.FIELD_NAME = 'name';
  Rubric.FIELD_SHOW = 'show';
  Rubric.FIELD_SORT = 'sort';
  Rubric.init(
    {
      [Rubric.FIELD_ID]: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      [Rubric.FIELD_PARENT_ID]: DataTypes.NUMBER,
      [Rubric.FIELD_NAME]: DataTypes.STRING,
      [Rubric.FIELD_SHOW]: DataTypes.BOOLEAN,
      [Rubric.FIELD_SORT]: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'Rubric',
      tableName: 'rubric',
    },
  );
  Rubric.associate = function ({ Product }) {
    Rubric.belongsToMany(Product, {
      through: 'rubric_product',
      as: 'products',
      foreignKey: Rubric.FIELD_ID,
      otherKey: Product.FIELD_ID,
      timestamps: false,
    });
  };
  return Rubric;
};
