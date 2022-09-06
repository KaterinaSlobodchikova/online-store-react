import { FC } from "react";
import { Outlet } from "react-router-dom";
import classNames from "classnames";

import styles from "./Home.module.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Home: FC = () => {
  return (
    <div className={classNames(styles.homeContainer)}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
