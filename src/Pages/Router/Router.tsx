import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "../../Components/Products";
import CartPage from "../CartPage";

import Home from "../Home";
import NotFoundPage from "../NotFoundPage";
import ProductPage from "../ProductPage";
import ResetPassword from "../ResetPassword";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

const MockUp = () => {
  return <p>Nothing is here already</p>;
};

enum Pages {
  Home = "/",
  ShopPage = "shop",
  ProductPage = "shop/:productId",
  CartPage = "cart",
  SignInPage = "login",
  SignUpPage = "registration",
  ResetPassword = "reset-password",
  Page404 = "*",
}

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Pages.Home} element={<Home />}>
          <Route path={Pages.ShopPage} element={<Products />} />
          <Route path={Pages.ProductPage} element={<ProductPage />} />
          <Route path={Pages.CartPage} element={<CartPage />} />
          <Route path={Pages.SignInPage} element={<SignIn />} />
          <Route path={Pages.SignUpPage} element={<SignUp />} />
          <Route path={Pages.ResetPassword} element={<ResetPassword />} />
          <Route path={Pages.Page404} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
