import { takeEvery, call, put } from "redux-saga/effects";
import { ADRESSLIST, addRoute } from "../actions";
import { serverGetRoute } from "../api";


export function* rSaga(action) {
  const {address1, address2} = action.payload;
  const data = yield call(serverGetRoute, address1, address2);
  if (data.success) {
    yield put(addRoute(data));
  }
}

export function* routeSaga() {
  yield takeEvery(ADRESSLIST, rSaga);
}