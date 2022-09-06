import { FC } from "react";
import classNames from "classnames";

import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  onClick: () => void;
  type: "green" | "white" | "transparent";
  width?: string;
};

const Button: FC<ButtonProps> = ({ title, onClick, type, width }) => {
  return (
    <button
      className={classNames(
        styles.button,
        {
          [styles.green]: type === "green",
        },
        {
          [styles.white]: type === "white",
        },
        {
          [styles.transparent]: type === "transparent",
        }
      )}
      onClick={onClick}
      style={width ? { width } : { width: "100%" }}
    >
      {title}
    </button>
  );
};

export default Button;
