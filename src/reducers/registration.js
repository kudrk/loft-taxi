import { REGISTRATED, REGISTRATE_SUCCESS } from '../actions';


const initialState = {
  isRegistrated: false,
  token: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTRATED: {
      return { isRegistrated: false, token: "" }
    }
    case REGISTRATE_SUCCESS: {
      return { isRegistrated: true, token: action.payload.token }
    }
    default:
      return state;
  }
}