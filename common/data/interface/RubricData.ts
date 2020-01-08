import RubricDataBase from './RubricDataBase';
import ProductDataBase from './ProductDataBase';

interface RubricData extends RubricDataBase {
  products: ProductDataBase[];
}

export const rubricDataFabric = (): RubricData => ({
  rubricId: null,
  parentId: 0,
  name: '',
  show: false,
  sort: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  parent: null,
  products: [],
});

export default RubricData;
