import axios from 'axios';

export const API_REQUEST_START = 'API_REQUEST_START';
export const API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS';
export const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE';

export const fetchData = (url, method, data) => {
  return (dispatch) => {
    dispatch({ type: API_REQUEST_START });
    axios({
      url,
      method,
      data
    })
      .then((response) => {
        const data = response.data;
        dispatch({ type: API_REQUEST_SUCCESS, payload: data });
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({ type: API_REQUEST_FAILURE, payload: errorMessage });
      });
  };
};
