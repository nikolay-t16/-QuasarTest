const { EntitySchema } = require('typeorm'); // import {EntitySchema} from "typeorm";
const { Product } = require('./models'); // import {Post} from "../model/Post";

module.exports = new EntitySchema({
  name: 'Product',
  target: Product,
  columns: {
    id: {
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
    isNew: {
      type: 'boolean',
    },
    isHit: {
      type: 'boolean',
    },
  },
});
