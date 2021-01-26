import { ADRESS_1, ADRESS_2 } from '../actions';


const initialState = {
  gotAdressList: false,
  token: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADRESS_1: {
      return { gotAdressList: true, token: action.payload.token }
    }
    case ADRESS_2: {
      return { gotAdressList: true, token: action.payload.token }
    }
    default:
      return state;
  }
}