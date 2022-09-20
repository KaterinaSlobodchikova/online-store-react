import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Lottie from "react-lottie-player";
import classNames from "classnames";

import styles from "./ProductPage.module.css";
import Title from "../../Components/Title";
import {
  ProductsSelectors,
  setSelectedProduct,
} from "../../Redux/reducers/products";
import Button from "../../Components/Button";
import lottieJson from "../../Utils/Lotties/loading-animation.json";
import { ProductModel } from "../../Utils/Types/models/product.model";
import ProductCard from "../../Components/Products/ProductCard";

const ProductPage: FC = () => {
  const dispatch = useDispatch();
  const product = useSelector(ProductsSelectors.getSelectedProduct);
  const productsList = useSelector(ProductsSelectors.getProducts);
  const isSelectedProductLoading = useSelector(
    ProductsSelectors.getSelectedProductLoading
  );
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    dispatch(setSelectedProduct(productId));
  }, []);

  const similarProducts = useMemo(() => {
    return productsList
      ?.slice(5, 8)
      .map((product: ProductModel) => (
        <ProductCard key={product.id} product={product} />
      ));
  }, [productsList]);

  return (
    <div className={classNames(styles.productPageContainer)}>
      <div className={classNames(styles.productPageWrapper)}>
        <div className={classNames(styles.imageWrapper)}>
          <img src={product?.thumbnail} alt="product-img" />
        </div>
        <div className={classNames(styles.productInfoWrapper)}>
          <Title text={product?.title ?? ""} />
          <p>Brand</p>
          <div>{product?.brand}</div>
          <p>Price</p>
          <div>$ {product?.price}</div>
          <div>{product?.description}</div>
          <div className={classNames(styles.buttonWrapper)}>
            <Button
              title="Add To Cart"
              onClick={() => {}}
              type="green"
            ></Button>
          </div>
          <div>
            <p>Products you may like</p>
            <div className={classNames(styles.similarProductsWrapper)}>
              {similarProducts}
            </div>
          </div>
        </div>
      </div>
      {isSelectedProductLoading && (
        <Lottie
          animationData={lottieJson}
          style={{ width: 300, height: 300 }}
        />
      )}
    </div>
  );
};

export default ProductPage;
