import ProductDataBase from './ProductDataBase';
import RubricData from './RubricData';

interface ProductData extends ProductDataBase {
  rubrics: RubricData[];
}

export default ProductData;
