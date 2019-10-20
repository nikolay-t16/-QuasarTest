const { EntitySchema } = require('typeorm'); // import {EntitySchema} from "typeorm";
const { Rubric } = require('./models'); // import {Post} from "../model/Post";

module.exports = new EntitySchema({
  name: 'Rubric',
  target: Rubric,
  columns: {
    rubric_id: {
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
});
