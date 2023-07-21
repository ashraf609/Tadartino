import {
  ADD_TRAVAUX_FAIL,
  ADD_TRAVAUX_REQUEST,
  ADD_TRAVAUX_SUCCESS,
  DELETE_TRAVAUX_FAIL,
  DELETE_TRAVAUX_REQUEST,
  DELETE_TRAVAUX_SUCCESS,
  GET_TRAVAUX_FAIL,
  GET_TRAVAUX_REQUEST,
  GET_TRAVAUX_SUCCESS,
  UPDATE_TRAVAUX_FAIL,
  UPDATE_TRAVAUX_REQUEST,
  UPDATE_TRAVAUX_SUCCESS,
} from "../Constants/TravauxConstants";

//get travaux reducer
export const get_travaux_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TRAVAUX_REQUEST:
      return { loading: true };
    case GET_TRAVAUX_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_TRAVAUX_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//add travaux reducer
export const add_travaux_reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TRAVAUX_REQUEST:
      return { loading: true };
    case ADD_TRAVAUX_SUCCESS:
      return { loading: false, data: action.payload };
    case ADD_TRAVAUX_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
//update travaux reducer
export const update_travaux_reducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TRAVAUX_REQUEST:
      return { loading: true };
    case UPDATE_TRAVAUX_SUCCESS:
      return { loading: false, data: action.payload };
    case UPDATE_TRAVAUX_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//delete travaux reducer
export const delete_travaux_reducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TRAVAUX_REQUEST:
      return { loading: true };
    case DELETE_TRAVAUX_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_TRAVAUX_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
