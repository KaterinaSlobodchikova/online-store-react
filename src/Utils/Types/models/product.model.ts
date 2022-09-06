export type ProductModel = {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type ProductListType = Array<ProductModel>;
