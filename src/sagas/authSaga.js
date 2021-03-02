import { takeEvery, call, put } from "redux-saga/effects";
import { AUTHENTICATE, logIn } from "../actions";
import { serverLogIn } from "../api";


export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const data = yield call(serverLogIn, email, password);
  if (data.success) {
    localStorage.setItem('token', data.token);
    yield put(logIn(data));
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}


