import { actionTypes } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RACE_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
