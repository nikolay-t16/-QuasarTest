interface ProductDataBase {
  productId: number | null;
  name: string;
  price: number;
  show: boolean;
  code: string;
  isNew: boolean;
  isHit: boolean;
}

export default ProductDataBase;
