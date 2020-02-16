import { FETCH_SUCCESS, FETCH_ERROR } from "./actions";

export const fetchArticle = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      action.payload.test = "test";
      return {
        ...state,
        content: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
