import { FC } from "react";
import classNames from "classnames";

import styles from "./ProductCard.module.css";
import { ProductModel } from "../../../Utils/Types/models/product.model";

type ProductCardProps = {
  product: ProductModel;
};

const ProductCard: FC<ProductCardProps> = (props) => {
  const { product } = props;

  return (
    <div>
      <img src={product.image} alt="product-img" />
      <div>{product.description}</div>
      <div>{product.price}</div>
    </div>
  );
};

export default ProductCard;
