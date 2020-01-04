export interface IRubric {
  rubricId?: number;
  parentId?: number;
  name?: string;
  show?: boolean;
  sort?: number;
  createdAt?: Date;
  updatedAt?: Date;
  parent?: IRubric;
}
