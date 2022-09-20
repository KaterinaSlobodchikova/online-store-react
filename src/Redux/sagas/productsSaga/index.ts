import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, put, call } from "redux-saga/effects";

import { getAllProductsApi, getSelectedProductApi } from "../../api";
import {
  getProducts,
  setProductsLoading,
  setProducts,
  setSelectedProduct,
  setSelectedProductLoading,
} from "../../reducers/products";

function* getProductsSaga() {
  yield put(setProductsLoading(true));
  const { data, status, problem } = yield call(getAllProductsApi);
  if (status === 200 && data) {
    yield put(setProducts(data.products));
  } else {
    console.log("ERROR FETCHING BOOKS", problem);
  }

  yield put(setProductsLoading(false));
}

function* getSelectedProductSaga(action: PayloadAction<number>) {
  yield put(setSelectedProductLoading(true));
  const { data, status } = yield call(getSelectedProductApi, action.payload);
  if (status === 200) yield put(setSelectedProduct(data));
  yield put(setSelectedProductLoading(false));
}

export default function* productsWatcher() {
  yield all([takeLatest(getProducts, getProductsSaga)]);
  yield all([takeLatest(setSelectedProduct, getSelectedProductSaga)]);
}
