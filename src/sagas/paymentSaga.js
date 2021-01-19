import { takeEvery, call, put } from "redux-saga/effects";
import { SAVECARDDATA, getCardSuccess } from "../actions";
import { serverCard } from "../api";


export function* paySaga(action) {
  const { cardNumber, expiryDate, cardName, cvc } = action.payload;
  const data = yield call(serverCard, { cardNumber, expiryDate, cardName, cvc });
  if (data.success) {
    yield put(getCardSuccess(data));
  }
}

export function* paymentSaga() {
  yield takeEvery(SAVECARDDATA, paySaga);
}