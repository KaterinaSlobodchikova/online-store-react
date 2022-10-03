import { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import styles from "./ProductCard.module.css";
import { ProductModel } from "../../../Utils/Types/models/product.model";
import IconButton from "../../IconButton";
import { AddToCartIcon, IconMinus, IconPlus } from "../../../Assets";
import {
  CartSelectors,
  decreaseCart,
  increaseCart,
  setCartProducts,
} from "../../../Redux/reducers/cart";
import Qty from "../../Qty";

type ProductCardProps = {
  product: ProductModel;
};

const ProductCard: FC<ProductCardProps> = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const cartProductsList = useSelector(CartSelectors.getCartProducts);

  const addToCartHandler = (product: ProductModel) => {
    dispatch(setCartProducts(product));
  };

  const isProductAtCart = !!cartProductsList.find(
    (productInfo: ProductModel) => productInfo.id === product?.id
  );

  return (
    <div className={classNames(styles.productCardContainer)}>
      <div className={classNames(styles.productCardWrapper)}>
        <div className={classNames(styles.productCardBackground)}>
          <div className={classNames(styles.imgWrapper)}>
            <img src={product.images[0]} alt="product-img" className="big" />
          </div>
        </div>
        <div className={classNames(styles.productInfoWrapper)}>
          <div className={classNames(styles.titleWrapper)}>
            <Link to={`/shop/${product?.id}`}>{product.title}</Link>
          </div>
          <div>$ {product.price}</div>
        </div>
        <div className={classNames(styles.shopNowWrapper)}>
          {isProductAtCart ? (
            <div className={classNames(styles.qtyWrapper)}>
              <IconButton
                icon={IconMinus}
                onClick={() => dispatch(decreaseCart(product?.id))}
              />
              <div>{product?.quantity}</div>
              <IconButton
                icon={IconPlus}
                onClick={() => dispatch(increaseCart(product?.id))}
              />
            </div>
          ) : (
            <IconButton
              icon={AddToCartIcon}
              onClick={() => addToCartHandler(product)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
