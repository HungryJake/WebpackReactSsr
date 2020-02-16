import fetch from "cross-fetch";
export const actionTest = text => ({
  type: "TEST_ACTION",
  text
});

export const fetchArticle = (site, slug) => async (dispatch, getState) => {
  if (!site || !slug) return;
  try {
    const response = await fetch(
      `http://${site}.local:3030/api/articles/${slug}`
    );
    const items = await response.json();
    dispatch(fetchSuccess(items));
  } catch (err) {
    dispatch(fetchError(err));
  }
};

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = res => {
  return {
    type: FETCH_SUCCESS,
    payload: res
  };
};

export const FETCH_ERROR = "FETCH_ERROR";
export const fetchError = err => {
  return {
    type: FETCH_ERROR,
    payload: err
  };
};
