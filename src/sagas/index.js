import { authSaga } from "./authSaga";
import { paymentSaga } from "./paymentSaga";
import { registrationSaga } from "./registrationSaga";
import { adressListSaga } from "./addressListSaga ";
import { fork } from "redux-saga/effects";

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(paymentSaga);
  yield fork(registrationSaga);
  yield fork(adressListSaga)
}
