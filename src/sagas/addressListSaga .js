//получение списка адресов

import { takeEvery, call, put } from "redux-saga/effects";
import { ADRESSLIST, getAdressListSuccess } from "../actions";
import { serverGetAdressList } from "../api";


export function* adressSaga() {
  const data = yield call(serverGetAdressList);
  yield put(getAdressListSuccess(data.addresses));
}

export function* adressListSaga() {
  yield takeEvery(ADRESSLIST, adressSaga);
}
