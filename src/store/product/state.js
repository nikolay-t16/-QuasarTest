const FIELD_ID = 'productId';
const FIELD_NAME = 'name';
const FIELD_PRICE = 'price';
const FIELD_SHOW = 'show';
const FIELD_CODE = 'code';
const FIELD_IS_NEW = 'isNew';
const FIELD_IS_HIT = 'isHit';

const listFields = {
  FIELD_ID,
  FIELD_NAME,
  FIELD_PRICE,
  FIELD_SHOW,
  FIELD_CODE,
  FIELD_IS_NEW,
  FIELD_IS_HIT,
};

const allFields = Object.assign({}, listFields);

export default {
  listFields,
  allFields,
  allProducts: [],
  product: {},
  filter: {
    minPrice: 0,
    maxPrice: null,
  },
  order: {
    sortBy: null,
    sortDirect: 'ASC',
  },
};
