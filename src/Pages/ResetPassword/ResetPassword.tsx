import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import styles from "./ResetPassword.module.css";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const ResetPassword: FC = () => {
  const navigate = useNavigate();
  const [emailSentShown, setEmailSentShown] = useState("");
  const [email, emailHandler] = useState("");

  const resetPassHandler = () => {
    setEmailSentShown(email);
  };

  const homePageHandler = () => {
    navigate("/");
  };

  return (
    <div className={classNames(styles.signInContainer)}>
      <div className={classNames(styles.signInWrapper)}>
        <h1>Reset Password</h1>

        {emailSentShown && (
          <div className={classNames(styles.resetText)}>
            You will receive an email to{" "}
            <span className={classNames(styles.resetEmail)}>
              {emailSentShown}
            </span>{" "}
            with a link to reset your password!
          </div>
        )}
        {emailSentShown ? (
          ""
        ) : (
          <span className={classNames(styles.infoWrapper)}>
            Enter your email address and we will send you further instructions
            on how to reset the password
          </span>
        )}

        <p>Email</p>
        <Input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(event: any) => emailHandler(event.target.value)}
        />

        {emailSentShown ? (
          <div className={classNames(styles.buttonWrapper)}>
            <Button
              title="Go to Home"
              onClick={homePageHandler}
              type={"green"}
            />
          </div>
        ) : (
          <div className={classNames(styles.buttonWrapper)}>
            <Button
              title="Reset Password"
              onClick={resetPassHandler}
              type={"green"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
