import RubricData from './RubricData';
import ProductData from './ProductData';

class Rubric extends RubricData {
  public parent: RubricData | null = null;
  public products?: ProductData[];

  public constructor(params: Record<string, any> = {}) {
    super(params);
  }
}

export const rubricDataFabric = (): Rubric => ({
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

export default Rubric;
