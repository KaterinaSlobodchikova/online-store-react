import { FC, useState } from "react";
import classNames from "classnames";

import styles from "./SignUp.module.css";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const SignUp: FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={classNames(styles.signInContainer)}>
      <div className={classNames(styles.signInWrapper)}>
        <h1>Create Account</h1>

        <p>Full name</p>
        <Input type="text" placeholder="Enter your full name" />
        <p>Email</p>
        <Input type="text" placeholder="Enter email" />
        <p>Password</p>
        
        <div className={classNames(styles.passWrapper)}>
          <Input
            type={passwordShown ? "text" : "password"}
            placeholder="Enter password"
          />
          <div className={classNames(styles.showPassButtonWrapper)}>
            <button onClick={togglePassword}>Show</button>
          </div>
        </div>

        <div className={classNames(styles.termsWrapper)}>
          <input type="checkbox" />
          <p>I agree to terms & conditions</p>
        </div>

        <div className={classNames(styles.buttonWrapper)}>
          <Button title="Register Account" onClick={() => {}} type={"green"} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
