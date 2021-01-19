//Вход
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = "AUTHENTICATE";

export const logIn = (payload) => ({
  type: LOG_IN,
  payload
});
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});

//Платежные данные
export const SAVECARDDATA = 'SAVECARDDATA';
export const GETCARDSUCCESS = 'GETCARDSUCCESS';

export const saveCardData = (cardNumber, expiryDate, cardName, cvc) => ({
  type: SAVECARDDATA,
  payload: { cardNumber, expiryDate, cardName, cvc },
});
export const getCardSuccess = () => ({ type: GETCARDSUCCESS })

//Регистрация
export const REGISTRATED = 'REGISTRATED';
export const REGISTRATE_SUCCESS = 'REGISTRATE_SUCCESS';

export const registrSuccess = () => ({ type: REGISTRATE_SUCCESS });
export const registr = (email, password, name, surname) => ({
  type: REGISTRATED,
  payload: { email, password, name, surname },
});

//Список адресов

// export const addressList = () => ({
//   type: ADRESSLIST,
//   payload
// })


// //Получения маршрута
// export const ADRESS_1 = 'ADRESS_1';
// export const ADRESS_2 = 'ADRESS_2';

// export const route = (address1, address2) => ({
//   type: ROUTE,
//   payload: { address1, address2 },
// })