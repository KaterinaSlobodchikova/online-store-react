import { createSlice } from "@reduxjs/toolkit";

import { ProductModel } from "./../../../Utils/Types/models/product.model";
import { RootState } from "../../store";

type InitialStateType = {
  cartItems: any[];
};

const initialState: InitialStateType = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    setCartProducts: (state: any, action: any) => {
      const productInCart = state.cartItems.find(
        (product: ProductModel) => product.id === action.payload.isbn13
      );
      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state: any, action: any) => {
      const index = state.cartItems.findIndex(
        (product: ProductModel) => product.id === action.payload
      );
      state.cartItems.splice(index, 1);
    },
    clearCart: (state: any) => {
      state.cartItems = [];
    },
    decreaseCart: (state: any, action: any) => {
      const product = state.cartItems.find(
        (product: ProductModel) => product.id === action.payload
      );
      if (product.quantity === 1) {
        product.quantity = 1;
      } else {
        product.quantity--;
      }
    },
    increaseCart: (state: any, action: any) => {
      const product = state.cartItems.find(
        (product: ProductModel) => product.id === action.payload
      );
      product.quantity++;
    },
  },
});

export const {
  setCartProducts,
  removeProduct,
  clearCart,
  decreaseCart,
  increaseCart,
} = cartSlice.actions;

const reducer = cartSlice.reducer;

export default reducer;

export const CartSelectors = {
  getCartProducts: (state: RootState) => state.cart.cartItems,
  getCartProductsWithoutRemovedBook: (state: RootState) => state.cart.cartItems,
};
