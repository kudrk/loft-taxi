//сага для получения маршрута

import { ADRESS_1, ADRESS_2 } from '../actions';


const initialState = {
  isRoute: false,
  token: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADRESS_1: {
      return { isRoute: true, token: action.payload.token }
    }
    case ADRESS_2: {
      return { isRoute: true, token: "" }
    }
    default:
      return state;
  }
}