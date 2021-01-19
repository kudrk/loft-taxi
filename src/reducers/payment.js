import { SAVECARDDATA, GETCARDSUCCESS } from "../actions";

const initialState = {
  cardData: false,
  token: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVECARDDATA: {
      return { cardData: true, token: action.payload.token }
    }
    case GETCARDSUCCESS: {
      return { cardData: false, token: "" }
    }
    default:
      return state;
  }
}