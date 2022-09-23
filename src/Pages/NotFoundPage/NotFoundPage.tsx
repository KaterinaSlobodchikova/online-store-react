import { FC } from "react";
import Lottie from "react-lottie-player";
import classNames from "classnames";

import styles from "./NotFoundPage.module.css";
import lottieJson from "../../Utils/Lotties/error-animation.json";

const NotFoundPage: FC = () => {
  return (
    <div className={classNames(styles.page404Container)}>
      <Lottie animationData={lottieJson} />
    </div>
  );
};

export default NotFoundPage;
