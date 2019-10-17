const { EntitySchema } = require('typeorm'); // import {EntitySchema} from "typeorm";
const { Product } = require('./models'); // import {Post} from "../model/Post";

module.exports = new EntitySchema({
  name: 'Product',
  target: Product,
  columns: {
    product_id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    code: {
      type: 'varchar',
    },
    price: {
      type: 'float',
    },
    show: {
      type: 'boolean',
    },
  },
});
