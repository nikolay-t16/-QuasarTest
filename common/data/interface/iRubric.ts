import iRubricBase from './iRubricBase';
import IProductBase from './IProductBase';

interface IRubric extends iRubricBase{
  parent: IRubric;
  products: IProductBase[];
}

export default IRubric;
