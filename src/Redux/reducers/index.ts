import { combineReducers } from "@reduxjs/toolkit";

import productsReducer from "./products";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
