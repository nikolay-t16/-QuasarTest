const { EntitySchema } = require('typeorm'); // import {EntitySchema} from 'typeorm';
const { Rubric } = require('./models'); // import {Post} from '../model/Post';

module.exports = new EntitySchema({
  name: 'Rubric',
  target: Rubric,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    parent_id: {
      type: 'int',
    },
    sort: {
      type: 'int',
    },
    show: {
      type: 'boolean',
    },
  },
  relations: {
    products: {
      target: 'Product',
      type: 'many-to-many',
      joinTable: true,
      cascade: true,
    },
  },
});
