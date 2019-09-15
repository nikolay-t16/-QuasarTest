const product = require('../../model/Product');

const getList = async function () {
  const result = await product.getList();
  return {
    result,
  };
};

module.exports = getList;
