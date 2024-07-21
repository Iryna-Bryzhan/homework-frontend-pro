import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const CLEAR = 'CLEAR';


export const fetchData = (category) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await axios.get(`https://swapi.dev/api/${category}/`);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.results });
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, error });
    }
  };
};

export const clear = () => {
  return { type: CLEAR };
};