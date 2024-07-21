import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, CLEAR } from "../actions/swapiActions";

const initialState = {
  loading: false,
  data: [],
  error: null
};

const swapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
      case CLEAR:
        return { ...state, data: []}
    default:
      return state;
  }
};

export default swapiReducer;