import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import styles from "./Qty.module.css";
import IconButton from "../IconButton";
import { IconMinus, IconPlus } from "../../Assets";
import { decreaseCart, increaseCart } from "../../Redux/reducers/cart";
import { ProductsSelectors } from "../../Redux/reducers/products";

const Qty: FC = () => {
  const dispatch = useDispatch();
  const product = useSelector(ProductsSelectors.getSelectedProduct);

  return (
    <div>
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
    </div>
  );
};

export default Qty;
