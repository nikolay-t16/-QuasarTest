import ProductDataBase from './ProductDataBase';
import RubricData from './RubricData';

interface ProductData extends ProductDataBase {
  rubrics: RubricData[];
}

export const makeEmptyProductData = ():ProductData  => ({
  productId: null,
  code: '',
  isHit: false,
  isNew: false,
  name: '',
  price: 0,
  rubrics: [],
  show: false,
});

export default ProductData;
