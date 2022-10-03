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
import { CartSelectors, setCartProducts } from "../../Redux/reducers/cart";

const ProductPage: FC = () => {
  const dispatch = useDispatch();
  const product = useSelector(ProductsSelectors.getSelectedProduct);
  const productsList = useSelector(ProductsSelectors.getProducts);
  const isSelectedProductLoading = useSelector(
    ProductsSelectors.getSelectedProductLoading
  );
  const cartProductsList = useSelector(CartSelectors.getCartProducts);
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    dispatch(setSelectedProduct(productId));
    window.scrollTo(0, 0);
  }, []);

  const isProductAtCart = !!cartProductsList.find(
    (productInfo: ProductModel) => productInfo.id === product?.id
  );

  const addToCartHandler = (product: ProductModel) => {
    dispatch(setCartProducts(product));
  };

  const similarProducts = useMemo(() => {
    return productsList
      ?.slice(1, 4)
      .map((product: ProductModel) => (
        <ProductCard key={product.id} product={product} />
      ));
  }, [productsList]);

  return (
    <div className={classNames(styles.productPageContainer)}>
      {isSelectedProductLoading && (
        <Lottie
          play
          animationData={lottieJson}
          style={{ width: 300, height: 300 }}
        />
      )}
      <div className={classNames(styles.productPageWrapper)}>
        <div className={classNames(styles.productWrapper)}>
          <div className={classNames(styles.imageWrapper)}>
            <img src={product?.thumbnail} alt="product-img" />
          </div>
          <div className={classNames(styles.productInfoWrapper)}>
            <Title text={product?.title ?? ""} />
            <div className={classNames(styles.title)}>Brand</div>
            <div className={classNames(styles.text)}>{product?.brand}</div>
            <div className={classNames(styles.title)}>Price</div>
            <div className={classNames(styles.text)}>$ {product?.price}</div>
            <div className={classNames(styles.descriptionText)}>
              {product?.description}
            </div>
            {isProductAtCart ? (
              <div className={classNames(styles.buttonWrapper)}>
                <Button
                  title="Added To Cart"
                  onClick={() => {}}
                  type="green"
                ></Button>
              </div>
            ) : (
              <div className={classNames(styles.buttonWrapper)}>
                <Button
                  title="Add To Cart"
                  onClick={() => addToCartHandler(product!)}
                  type="green"
                ></Button>
              </div>
            )}
          </div>
        </div>

        <div className={classNames(styles.similarProductsContainer)}>
          <div className={classNames(styles.secondTitle)}>
            Products you may like
          </div>
          <div className={classNames(styles.similarProductsWrapper)}>
            {similarProducts}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
