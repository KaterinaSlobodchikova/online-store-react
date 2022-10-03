import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "react-lottie-player";
import classNames from "classnames";

import styles from "./CartPage.module.css";
import {
  CartSelectors,
  clearCart,
  decreaseCart,
  increaseCart,
  removeProduct,
} from "../../Redux/reducers/cart";
import lottieJson from "../../Utils/Lotties/empty.json";
import { ProductModel } from "../../Utils/Types/models/product.model";
import IconButton from "../../Components/IconButton";
import { DeleteIcon, IconMinus, IconPlus } from "../../Assets";
import Button from "../../Components/Button";
import Title from "../../Components/Title";
import Qty from "../../Components/Qty";

const CartPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProductsList = useSelector(CartSelectors.getCartProducts);

  const subTotal = cartProductsList.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const fee = (subTotal * 0.05).toFixed(0);

  const totalSum = subTotal + +fee;

  const removeFromCart = (id: number) => {
    dispatch(removeProduct(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const onCheckOutHandler = () => {
    alert("Thank you for your order!");
    navigate("/shop");
    handleClearCart();
  };

  return (
    <div className={classNames(styles.cartPageContainer)}>
      {cartProductsList.length === 0 ? (
        <div className={classNames(styles.emptyCartWrapper)}>
          <p>Your Cart is empty.</p>
          <Lottie
            play
            animationData={lottieJson}
            style={{ width: 500, height: 500 }}
          />
        </div>
      ) : (
        <div className={classNames(styles.fullCartWrapper)}>
          <div className={classNames(styles.productInfoWrapper)}>
            {cartProductsList.map((product: ProductModel) => (
              <div key={product.id}>
                <div>
                  <div className={classNames(styles.cartInfoWrapper)}>
                    <div className={classNames(styles.imgBackground)}>
                      <img src={product.images[0]} alt="img-preview" />
                    </div>

                    <div className={classNames(styles.cartProductWrapper)}>
                      <div className={classNames(styles.titleWrapper)}>
                        {product.title}
                      </div>
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
                      <div className={classNames(styles.priceWrapper)}>
                        <p>Price</p>
                        <div>$ {product.price}</div>
                      </div>

                      <IconButton
                        icon={DeleteIcon}
                        onClick={() => removeFromCart(product.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={classNames(styles.orderSummaryWrapper)}>
            <div className={classNames(styles.sumWrapper)}>
              <Title text="Order Summary" />
              <div className={classNames(styles.sumFeeWrapper)}>
                <div className={classNames(styles.subTotalWrapper)}>
                  <div>Sub Total</div>
                  <div>$ {subTotal}</div>
                </div>
                <div className={classNames(styles.feeWrapper)}>
                  <p>Delivery Fee</p>
                  <div>$ {fee}</div>
                </div>
              </div>

              <div className={classNames(styles.divider)} />
              <div className={classNames(styles.totalSumWrapper)}>
                <p>Total</p>
                <div>$ {totalSum}</div>
              </div>
              <div className={classNames(styles.cartButtonWrapper)}>
                <Button
                  title="Checkout"
                  onClick={() => onCheckOutHandler()}
                  type={"green"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
