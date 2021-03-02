import { SAVE_CARD_SUCCESS, GET_CARD_SUCCESS, GET_CARD, SAVE_CARD } from "../actions";

const initialState = {
  cardData: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_CARD: {
      return { cardData: false }
    }
    case SAVE_CARD_SUCCESS: {
      return { cardData: true }
    }
    case GET_CARD: {
      return { cardData: false }
    }
    case GET_CARD_SUCCESS: {
      return { cardData: true, data: action.payload }
    }
    default:
      return state;
  }
}