import {
  ADD_REAL_FAIL,
  ADD_REAL_REQUEST,
  ADD_REAL_SUCCESS,
  DELETE_REALS_FAIL,
  DELETE_REALS_REQUEST,
  DELETE_REALS_SUCCESS,
  GET_REALS_FAIL,
  GET_REALS_REQUEST,
  GET_REALS_SUCCESS,
} from "../Constants/RealisationsConstants";

//get travaux reducer
export const get_reals_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_REALS_REQUEST:
      return { loading: true };
    case GET_REALS_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_REALS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//add travaux reducer
export const add_real_reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_REAL_REQUEST:
      return { loading: true };
    case ADD_REAL_SUCCESS:
      return { loading: false, data: action.payload };
    case ADD_REAL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//delete travaux reducer
export const delete_real_reducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_REALS_REQUEST:
      return { loading: true };
    case DELETE_REALS_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_REALS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
