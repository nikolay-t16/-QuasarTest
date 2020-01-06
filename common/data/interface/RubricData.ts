import RubricDataBase from './RubricDataBase';
import ProductDataBase from './ProductDataBase';

interface RubricData extends RubricDataBase {
  products: ProductDataBase[];
}

export default RubricData;
