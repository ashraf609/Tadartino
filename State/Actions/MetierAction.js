import axios from "axios";
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

//get metiers
export const get_metiers_action = () => async (dispatch) => {
  dispatch({ type: GET_METIERS_REQUEST });
  try {
    const { data } = await axios.get(
      "http://13.48.149.62/api/metier/get-metiers"
    );
    dispatch({ type: GET_METIERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_METIERS_FAIL, payload: error.response });
  }
};

//get metier users
export const get_metier_users_action = (nom, genre) => async (dispatch) => {
  dispatch({ type: GET_METIERS_USERS_REQUEST });
  try {
    const { data } = await axios.get(
      "http://13.48.149.62/api/metier/get-users-of-metier",
      {
        params: {
          nom,
          genre,
        },
      }
    );
    dispatch({ type: GET_METIERS_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_METIERS_USERS_FAIL, payload: error.response });
  }
};
//get single metier
export const get_single_metiers_action = (token, id) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_METIERS_REQUEST });
  try {
    const { data } = await axios.get(
      "http://13.48.149.62/api/metier/get-single-metiers",
      {
        headers: {
          token,
        },
        params: {
          id,
        },
      }
    );
    dispatch({ type: GET_SINGLE_METIERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SINGLE_METIERS_FAIL, payload: error.response });
  }
};

//search metiers parents
export const search_parent_metiers_action =
  (token, nom) => async (dispatch) => {
    dispatch({ type: SEARCH_PARENT_REQUEST });
    try {
      const { data } = await axios.get(
        "http://13.48.149.62/api/metier/search-parent",
        {
          headers: {
            token,
          },
          params: {
            nom,
          },
        }
      );
      dispatch({ type: SEARCH_PARENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SEARCH_PARENT_FAIL, payload: error.response });
    }
  };

//add metier
export const add_metiers_action = (token, metier) => async (dispatch) => {
  dispatch({ type: ADD_METIERS_REQUEST });
  try {
    const { data } = await axios.put(
      "http://13.48.149.62/api/metier/add-metier",
      metier,
      {
        headers: {
          token,
        },
      }
    );
    dispatch({ type: ADD_METIERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_METIERS_FAIL, payload: error.response });
  }
};

//update metier
export const update_metiers_action = (token, metier) => async (dispatch) => {
  dispatch({ type: UPDATE_METIERS_REQUEST });
  try {
    const { data } = await axios.post(
      "http://13.48.149.62/api/metier/update-metier",
      metier,
      {
        headers: token,
      }
    );
    dispatch({ type: UPDATE_METIERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_METIERS_FAIL, payload: error.response });
  }
};

//delete metier
export const delete_metiers_action =
  (token = null, id) =>
  async (dispatch) => {
    dispatch({ type: DELETE_METIERS_REQUEST });
    try {
      const { data } = await axios.delete(
        "http://13.48.149.62/api/metier/delete-metier",
        {
          headers: {
            token,
          },
          params: {
            id,
          },
        }
      );
      dispatch({ type: DELETE_METIERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELETE_METIERS_FAIL, payload: error.response });
    }
  };
