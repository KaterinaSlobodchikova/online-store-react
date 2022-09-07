import { FC } from "react";
import classNames from "classnames";

import styles from "./ProductCard.module.css";
import { ProductModel } from "../../../Utils/Types/models/product.model";
import IconButton from "../../IconButton";
import { AddToCartIcon, IconMinus, IconPlus } from "../../../Assets";

type ProductCardProps = {
  product: ProductModel;
};

const ProductCard: FC<ProductCardProps> = (props) => {
  const { product } = props;

  return (
    <div className={classNames(styles.productCardContainer)}>
      <div className={classNames(styles.productCardWrapper)}>
        <div className={classNames(styles.productCardBackground)}>
          <img src={product.image} alt="product-img" />
        </div>
        <div className={classNames(styles.productInfoWrapper)}>
          <div className={classNames(styles.titleWrapper)}>{product.title}</div>
          <div>$ {product.price}</div>
          <div className={classNames(styles.shopNowWrapper)}>
            <div className={classNames(styles.qtyWrapper)}>
              <IconButton icon={IconMinus} onClick={() => {}} />
              <div>1</div>
              <IconButton icon={IconPlus} onClick={() => {}} />
            </div>
            <IconButton icon={AddToCartIcon} onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
