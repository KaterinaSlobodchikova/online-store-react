import { all } from "redux-saga/effects";
import productsWatcher from "../productsSaga";

function* rootSaga() {
  yield all([productsWatcher()]);
}

export default rootSaga;
