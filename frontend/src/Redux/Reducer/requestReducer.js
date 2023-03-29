import { API_REQUEST_START, API_REQUEST_SUCCESS, API_REQUEST_FAILURE} from '../Actions/actions';

const initialState = {
    loading: false,
    data: [],
    error: ''
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case API_REQUEST_START:
        return {
          ...state,
          loading: true
        };
      case API_REQUEST_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: ''
        };
      case API_REQUEST_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;