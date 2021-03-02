//Вход
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = "AUTHENTICATE";

export const logIn = (payload) => ({
  type: LOG_IN,
  payload: { success: payload.success, token: payload.token }
});
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});

//Платежные данные
export const SAVE_CARD = 'SAVE_CARD';
export const SAVE_CARD_SUCCESS = 'SAVE_CARD_SUCCESS';
export const GET_CARD = 'GET_CARD';
export const GET_CARD_SUCCESS = 'GET_CARD_SUCCESS';

export const saveCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: SAVE_CARD,
  payload: { cardNumber, expiryDate, cardName, cvc, token },
});
export const saveCardSuccess = () => ({
  type: SAVE_CARD_SUCCESS,
});
export const getCard = (token) => ({ type: GET_CARD, payload: { token } })
export const getCardSuccess = (data) => ({
  type: GET_CARD_SUCCESS,
  payload: data
})

//Регистрация
export const REGISTRATED = 'REGISTRATED';
export const REGISTRATE_SUCCESS = 'REGISTRATE_SUCCESS';

export const registrSuccess = () => ({ type: REGISTRATE_SUCCESS });
export const registr = (email, password, name, surname) => ({
  type: REGISTRATED,
  payload: { email, password, name, surname },
});

//Список адресов

export const ADRESSLIST = 'ADRESSLIST';
export const ADRESSLISTSUCCESS = 'ADRESSLISTSUCCESS';

export const getAdressList = () => ({
  type: ADRESSLIST
})

export const getAdressListSuccess = (list) => ({
  type: ADRESSLISTSUCCESS,
  payload: list
})

//Получение маршрута
export const ROUTE = 'ROUTE';
export const ROUTESUCCESS = 'ROUTESUCCESS'

export const getRoute = (address1, address2) => ({
  type: ROUTE,
  payload: { address1, address2 }
});

export const routeSuccess = (coords) => ({
  type: ROUTESUCCESS,
  payload: coords
});
