//получение списка адресов

import { takeEvery, call, put } from "redux-saga/effects";
import { ADRESSLIST } from "../actions";
import { serverAdressList } from "../api";


export function* adressSaga(action) {
  const { email, password } = action.payload;
  const data = yield call(serverLogIn, email, password);
  if (data.success) {
    yield put(logIn(data));
  }
}

export function* adressListSaga() {
  yield takeEvery(ADRESSLIST, adressSaga);
}
