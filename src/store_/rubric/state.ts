const FIELD_ID = 'rubricId';
const FIELD_PARENT_ID = 'parentId';
const FIELD_NAME = 'name';
const FIELD_SHOW = 'show';
const FIELD_SORT = 'sort';

const listFields = {
  FIELD_ID,
  FIELD_PARENT_ID,
  FIELD_NAME,
  FIELD_SHOW,
  FIELD_SORT,
};

const allFields = Object.assign({}, listFields);
export default {
  listFields,
  allFields,
  allRubrics: [],
  rubric: {},
};
