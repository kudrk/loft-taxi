import { ADRESSLISTSUCCESS } from '../actions';


const initialState = {
  list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADRESSLISTSUCCESS: {
      return { list: action.payload }
    }
    default:
      return state;
  }
}