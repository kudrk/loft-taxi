import { takeLatest, call, put } from "redux-saga/effects";
import { SAVE_CARD, GET_CARD, saveCardSuccess, getCardSuccess } from "../actions";
import { serverSaveCard, serverGetCard } from "../api";


export function* saveCardSaga(action) {
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
  const data = yield call(serverSaveCard, { cardNumber, expiryDate, cardName, cvc, token });
  if (data.success) {
    yield put(saveCardSuccess());
  }
}

export function* getCardSaga(action) {
  const { token } = action.payload;
  const data = yield call(serverGetCard, token);
  if (data.id) {
    yield put(getCardSuccess(data));
  }
}

export function* paymentSaga() {
  yield takeLatest(SAVE_CARD, saveCardSaga);
  yield takeLatest(GET_CARD, getCardSaga);
}