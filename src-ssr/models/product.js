const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {}
  Product.FIELD_ID = 'productId';
  Product.FIELD_NAME = 'name';
  Product.FIELD_PRICE = 'price';
  Product.FIELD_SHOW = 'show';
  Product.FIELD_CODE = 'code';
  Product.FIELD_IS_NEW = 'isNew';
  Product.FIELD_IS_HIT = 'isHit';
  Product.init(
    {
      [Product.FIELD_ID]: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true,
      },
      [Product.FIELD_NAME]: DataTypes.STRING,
      [Product.FIELD_PRICE]: DataTypes.NUMBER,
      [Product.FIELD_SHOW]: DataTypes.BOOLEAN,
      [Product.FIELD_CODE]: DataTypes.STRING,
      [Product.FIELD_IS_HIT]: DataTypes.BOOLEAN,
      [Product.FIELD_IS_NEW]: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'product',
    },
  );

  Product.associate = function ({ Rubric }) {
    Product.belongsToMany(Rubric, {
      through: 'rubric_product',
      as: 'rubrics',
      foreignKey: 'productId',
      otherKey: 'rubricId',
      timestamps: false,
    });
  };
  return Product;
};
