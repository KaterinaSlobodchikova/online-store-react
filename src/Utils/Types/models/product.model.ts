export type ProductModel = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
  category: string;
  images: string[];
  quantity: number;
};

export type ProductListType = Array<ProductModel>;
