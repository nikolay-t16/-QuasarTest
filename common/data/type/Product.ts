import ProductData from './ProductData';
import Rubric from './Rubric';
class Product extends ProductData {
  // rubrics? for typeorm.  This is ORM requirement to make relations to work properly.
  public rubrics?: Rubric[];

  public constructor(params: Record<string, any> = {}) {
    super(params);
  }
}

export default Product;
