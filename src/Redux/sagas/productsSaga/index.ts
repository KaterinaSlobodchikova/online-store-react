import { all, takeLatest, put, call } from "redux-saga/effects";
import { getAllProductsApi } from "../../api";
import {
  getProducts,
  setProductsLoading,
  setProducts,
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

export default function* productsWatcher() {
  yield all([takeLatest(getProducts, getProductsSaga)]);
}
