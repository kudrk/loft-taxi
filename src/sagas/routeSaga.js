//построение маршрута

import { takeEvery, call, put } from "redux-saga/effects";
import { ROUTE, routeSuccess } from "../actions";
import { serverRoute } from "../api";


export function* rSaga(action) {
  const { address1, address2 } = action.payload;
  const data = yield call(serverRoute, { address1, address2 });
  if (data.success) {
    yield put(routeSuccess(data));
  }
}

export function* routeSaga() {
  yield takeEvery(ROUTE, rSaga);
}