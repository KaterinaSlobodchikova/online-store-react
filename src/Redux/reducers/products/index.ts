import { RootState } from "./../../store/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  productsList: any[];
  isProductsLoading: boolean;
};

const initialState: InitialStateType = {
  productsList: [],
  isProductsLoading: false,
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
  },
});

export const { getProducts, setProductsLoading, setProducts } =
  productsSlice.actions;

const reducer = productsSlice.reducer;

export default reducer;

export const ProductsSelectors = {
  getProducts: (state: RootState) => state.products.productsList,
  getProductsLoading: (state: RootState) => state.products.isProductsLoading,
  getAllProducts: (state: RootState) => state.products.productsList,
};
