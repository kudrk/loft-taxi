import { takeEvery, call, put } from "redux-saga/effects";
import { REGISTRATED, registr } from "../actions";
import { serverReg } from "../api";


export function* registrSaga(action) {
  const { token } = action.payload;
  const data = yield call(serverReg, token);
  if (data.success) {
    yield put(registr(data));
  }
}

export function* registrationSaga() {
  yield takeEvery(REGISTRATED, registrSaga);
}

