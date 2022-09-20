import { FC } from "react";
import classNames from "classnames";

import styles from "./Title.module.css";

type TitleProps = {
  text: string;
};

const Title: FC<TitleProps> = (props) => {
  const { text } = props;

  return <h2 className={classNames(styles.titleWrapper)}>{text}</h2>;
};

export default Title;
