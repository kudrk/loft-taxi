import { ADRESSLIST } from '../actions';


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