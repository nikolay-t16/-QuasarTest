class ProductData {
  public static readonly FIELD_ID = 'productId';
  public static readonly FIELD_CODE = 'code';
  public static readonly FIELD_IS_HIT = 'isHit';
  public static readonly FIELD_IS_NEW = 'isNew';
  public static readonly FIELD_IS_NAME = 'name';
  public static readonly FIELD_IS_PRICE = 'price';
  public static readonly FIELD_IS_SHOW = 'show';
  public static readonly FIELD_CREATED_AT = 'createdAt';
  public static readonly FIELD_UPDATE_AT = 'updatedAt';

  public static readonly LIST_FIELDS: string[] = [
    ProductData.FIELD_ID,
    ProductData.FIELD_CODE,
    ProductData.FIELD_IS_HIT,
    ProductData.FIELD_IS_NEW,
    ProductData.FIELD_IS_NAME,
    ProductData.FIELD_IS_PRICE,
    ProductData.FIELD_IS_SHOW,
  ];

  public static readonly ITEM_FIELDS: string[] = ProductData.LIST_FIELDS;

  public productId: number | null = null;
  public code: string | null = null;
  public isHit: boolean = false;
  public isNew: boolean = false;
  public name: string = '';
  public price: number = 0;
  public show: boolean = false;
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();

  public constructor(params: Record<string, any> = {}) {
    const {
      productId = null,
      code = null,
      isHit = false,
      isNew = false,
      name = '',
      price = 0,
      show = false,
      createdAt = new Date(),
      updatedAt = new Date(),
    }
      = params;
    this.productId = productId;
    this.code = code;
    this.isHit = isHit;
    this.isNew = isNew;
    this.name = name;
    this.price = price;
    this.show = show;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default ProductData;
