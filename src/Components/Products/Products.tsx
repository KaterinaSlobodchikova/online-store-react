import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import styles from "./Products.module.css";
import { getProducts, ProductsSelectors } from "../../Redux/reducers/products";
import { ProductModel } from "../../Utils/Types/models/product.model";
import ProductCard from "./ProductCard";

const Products: FC = () => {
  const productsList = useSelector(ProductsSelectors.getProducts);
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
      <p>All products</p>
      <div>{allProductsElements}</div>
    </div>
  );
};

export default Products;
