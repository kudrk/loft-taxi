import { takeEvery, call, put } from "redux-saga/effects";
import { REGISTRATED, registr, registrSuccess } from "../actions";
import { serverReg } from "../api";


export function* registrSaga(action) {
  const { email, password, name, surname } = action.payload;
  const data = yield call(serverReg, { email, password, name, surname });
  console.log(data);
  if (data.success) {
    yield put(registrSuccess(data));
  }
}

export function* registrationSaga() {
  yield takeEvery(REGISTRATED, registrSaga);
}

