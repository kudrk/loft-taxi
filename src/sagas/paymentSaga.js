import { takeEvery, call, put } from "redux-saga/effects";
import { GETCARD, payYes } from "../actions";
import { serverGetCard } from "../api";


export function* getCardSaga(action) {
  const { token } = action.payload;
  const data = yield call(serverGetCard, token);
  if (data.id) {
    yield put(payYes(data));
  }
}

export function* paymentSaga() {
  yield takeEvery(GETCARD, getCardSaga);
}