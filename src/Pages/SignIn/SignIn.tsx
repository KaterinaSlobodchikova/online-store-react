import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import styles from "./SignIn.module.css";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const SignIn: FC = () => {
  return (
    <div className={classNames(styles.signInContainer)}>
      <div className={classNames(styles.signInWrapper)}>
        <h1>Sign In</h1>
        <span>
          New User? <Link to="/registration">Create account</Link>
        </span>
        <p>Email</p>
        <Input type="text" placeholder="Enter email" />
        <p>Password</p>
        <Input type="password" placeholder="Enter password" />

        <div className={classNames(styles.forgotPassWrapper)}>
          <Link to="/reset-password">Forgot password?</Link>
        </div>

        <div className={classNames(styles.buttonWrapper)}>
          <Button title="Sign In" onClick={() => {}} type={"green"} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
