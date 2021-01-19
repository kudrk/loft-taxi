import { takeEvery, call, put } from "redux-saga/effects";
import { AUTHENTICATE, logIn } from "../actions";
import { serverLogIn } from "../api";


export function* rSaga(action) {
  const {address1, address2} = action.payload;
  const data = yield call(serverLogIn, email, password);
  if (data.success) {
    yield put(logIn(data));
  }
}

export function* routeSaga() {
  yield takeEvery(ROUTE, rSaga);
}