import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { authSaga } from "./sagas/authSaga";
import { paymentSaga } from "./sagas/paymentSaga";
import { registrationSaga } from "./sagas/registrationSaga";



const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(authSaga);
sagaMiddleware.run(paymentSaga);
sagaMiddleware.run(registrationSaga);
