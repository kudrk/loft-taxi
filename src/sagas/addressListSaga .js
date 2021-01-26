//получение списка адресов

import { takeEvery, call, put } from "redux-saga/effects";
import { ADRESSLIST, getAdressList } from "../actions";
import { serverGetAdressList } from "../api";


export function* adressSaga(action) {
  const { address1, address2 } = action.payload;
  const data = yield call(serverGetAdressList, address1, address2);
  if (data.success) {
    yield put(getAdressList(data));
  }
}

export function* adressListSaga() {
  yield takeEvery(ADRESSLIST, adressSaga);
}
