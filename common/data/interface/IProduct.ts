import IProductBase from './IProductBase';
import iRubric from './iRubric';

interface IProduct extends IProductBase {
  rubrics: iRubric[];
}

export default IProduct;
