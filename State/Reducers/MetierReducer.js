import {
  ADD_METIERS_FAIL,
  ADD_METIERS_REQUEST,
  ADD_METIERS_SUCCESS,
  DELETE_METIERS_FAIL,
  DELETE_METIERS_REQUEST,
  DELETE_METIERS_SUCCESS,
  GET_METIERS_FAIL,
  GET_METIERS_REQUEST,
  GET_METIERS_SUCCESS,
  GET_METIERS_USERS_FAIL,
  GET_METIERS_USERS_REQUEST,
  GET_METIERS_USERS_SUCCESS,
  GET_SINGLE_METIERS_FAIL,
  GET_SINGLE_METIERS_REQUEST,
  GET_SINGLE_METIERS_SUCCESS,
  SEARCH_PARENT_FAIL,
  SEARCH_PARENT_REQUEST,
  SEARCH_PARENT_SUCCESS,
  UPDATE_METIERS_FAIL,
  UPDATE_METIERS_REQUEST,
  UPDATE_METIERS_SUCCESS,
} from "../Constants/MetierConstants";

//get metiers reducer
export const get_metiers_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_METIERS_REQUEST:
      return { loading: true };
    case GET_METIERS_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_METIERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get metiers reducer
export const get_metier_users_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_METIERS_USERS_REQUEST:
      return { loading: true };
    case GET_METIERS_USERS_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_METIERS_USERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get single metiers reducer
export const get_single_metiers_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_METIERS_REQUEST:
      return { loading: true };
    case GET_SINGLE_METIERS_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_SINGLE_METIERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//search parent metier reducer
export const search_parent_metiers_reducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_PARENT_REQUEST:
      return { loading: true };
    case SEARCH_PARENT_SUCCESS:
      return { loading: false, data: action.payload };
    case SEARCH_PARENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//add metiers reducer
export const add_metiers_reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_METIERS_REQUEST:
      return { loading: true };
    case ADD_METIERS_SUCCESS:
      return { loading: false, data: action.payload };
    case ADD_METIERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//update metiers reducer
export const update_metiers_reducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_METIERS_REQUEST:
      return { loading: true };
    case UPDATE_METIERS_SUCCESS:
      return { loading: false, data: action.payload };
    case UPDATE_METIERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//delete metiers reducer
export const delete_metiers_reducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_METIERS_REQUEST:
      return { loading: true };
    case DELETE_METIERS_SUCCESS:
      return { loading: false, data: action.payload };
    case DELETE_METIERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
