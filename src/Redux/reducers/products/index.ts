import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductModel } from "./../../../Utils/Types/models/product.model";
import { RootState } from "./../../store";

type InitialStateType = {
  productsList: any[];
  isProductsLoading: boolean;
  selectedProduct: ProductModel | null;
  selectedProductIsLoading: boolean;
};

const initialState: InitialStateType = {
  productsList: [],
  isProductsLoading: false,
  selectedProduct: null,
  selectedProductIsLoading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<undefined>) => {},
    setProductsLoading: (state, action: PayloadAction<boolean>) => {
      state.isProductsLoading = action.payload;
    },
    setProducts: (state, action: PayloadAction<any[]>) => {
      state.productsList = action.payload;
    },
    setSelectedProduct: (state: any, action: any) => {
      state.selectedProduct = action.payload;
    },
    setSelectedProductLoading: (state: any, action: any) => {
      state.selectedProductIsLoading = action.payload;
    },
  },
});

export const {
  getProducts,
  setProductsLoading,
  setProducts,
  setSelectedProduct,
  setSelectedProductLoading,
} = productsSlice.actions;

const reducer = productsSlice.reducer;

export default reducer;

export const ProductsSelectors = {
  getProducts: (state: RootState) => state.products.productsList,
  getProductsLoading: (state: RootState) => state.products.isProductsLoading,
  getAllProducts: (state: RootState) => state.products.productsList,
  getSelectedProduct: (state: RootState) => state.products.selectedProduct,
  getSelectedProductLoading: (state: RootState) =>
    state.products.selectedProductIsLoading,
};
