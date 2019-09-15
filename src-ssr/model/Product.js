class Product {
  // static FIELD_ID : 'product_id';

  // productId : null;

  static getList() {
    return [
      {
        name: 'test1',
        product_id: 1,
        price: 0.1,
        show: false,
        code: 'a223',
      },
      {
        name: 'test2',
        product_id: 2,
        price: 0.1,
        show: true,
        code: 'b223',
      },
    ];
  }
}

module.exports = Product;
