import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "react-lottie-player";
import classNames from "classnames";

import styles from "./Products.module.css";
import { getProducts, ProductsSelectors } from "../../Redux/reducers/products";
import { ProductModel } from "../../Utils/Types/models/product.model";
import ProductCard from "./ProductCard";
import lottieJson from "../../Utils/Lotties/loading-animation.json";

const Products: FC = () => {
  const productsList = useSelector(ProductsSelectors.getProducts);
  const isAllProductsLoading = useSelector(
    ProductsSelectors.getProductsLoading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    window.scrollTo(0, 0);
  }, []);

  const allProductsElements = useMemo(() => {
    return productsList?.map((product: ProductModel) => (
      <ProductCard key={product.id} product={product} />
    ));
  }, [productsList]);

  return (
    <div className={classNames(styles.productsContainer)}>
      <div className={classNames(styles.productsWrapper)}>
        {allProductsElements}
      </div>
      {isAllProductsLoading && (
        <Lottie
          play
          animationData={lottieJson}
          style={{ width: 300, height: 300 }}
        />
      )}
    </div>
  );
};

export default Products;
