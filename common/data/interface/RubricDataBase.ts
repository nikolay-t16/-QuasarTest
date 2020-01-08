interface RubricDataBase {
  rubricId: number|null;
  parentId: number;
  name: string;
  show: boolean;
  sort: number;
  createdAt: Date;
  updatedAt: Date;
  parent: RubricDataBase | null;
}

export default RubricDataBase;
