import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";

import styles from "./Header.module.css";
import { Logotype } from "../../Assets";
import IconButton from "../IconButton";
import Button from "../Button";

const Header: FC = () => {
  const navigate = useNavigate();

  const homePageHandler = () => {
    navigate("/shop");
  };

  const signInHandler = () => {
    navigate("/login");
  };

  const signUpHandler = () => {
    navigate("/registration");
  };

  return (
    <div className={classNames(styles.headerContainer)}>
      <div className={classNames(styles.headerWrapper)}>
        <IconButton icon={Logotype} onClick={homePageHandler} />
        <div className={classNames(styles.linksWrapper)}>
          <Link to={`/shop`}>Shop</Link>
          <Link to={`/cart`}>Cart</Link>
          <div className={classNames(styles.button)}>
            <Button title="Sign Up" onClick={signUpHandler} type="white" />
          </div>
          <div className={classNames(styles.button)}>
            <Button title="Login" onClick={signInHandler} type="transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
