class RubricData {
  public static readonly FIELD_ID = 'rubricId';
  public static readonly FIELD_PARENT_ID = 'parentId';
  public static readonly FIELD_NAME = 'name';
  public static readonly FIELD_SHOW = 'show';
  public static readonly FIELD_SORT = 'sort';
  public static readonly FIELD_CREATED_AT = 'createdAt';
  public static readonly FIELD_UPDATE_AT = 'updatedAt';

  public static readonly LIST_FIELDS: string[] = [
    RubricData.FIELD_ID,
    RubricData.FIELD_PARENT_ID,
    RubricData.FIELD_NAME,
    RubricData.FIELD_SHOW,
    RubricData.FIELD_SORT,
  ];

  public rubricId: number | null = null;
  public parentId: number = 0;
  public name: string = '';
  public show: boolean = true;
  public sort: number = 0;
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();

  public constructor(params: Record<string, any> = {}) {
    const {
      rubricId = null,
      parentId = 0,
      name = '',
      show = true,
      sort = 0,
      createdAt = new Date(),
      updatedAt = new Date(),
    }
      = params;
    this.rubricId = rubricId;
    this.parentId = parentId;
    this.name = name;
    this.show = show;
    this.sort = sort;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default RubricData;
