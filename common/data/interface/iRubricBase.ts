interface IRubricBase {
  rubricId: number;
  parentId: number;
  name: string;
  show: boolean;
  sort: number;
  createdAt: Date;
  updatedAt: Date;
  parent: IRubricBase;
}

export default IRubricBase;
