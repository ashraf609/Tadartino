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
import axios from "axios";

//add travaux
export const add_travaux_action = (travaux) => async (dispatch) => {
  dispatch({ type: ADD_TRAVAUX_REQUEST });
  try {
    const { data } = await axios.put(
      "http://13.48.149.62/api/travaux/add-travaux",
      travaux
    );
    dispatch({ type: ADD_TRAVAUX_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_TRAVAUX_FAIL, payload: error.response });
  }
};

//get travaux
export const get_travaux_action = (info) => async (dispatch) => {
  dispatch({ type: GET_TRAVAUX_REQUEST });
  try {
    const { data } = await axios.get(
      "http://13.48.149.62/api/travaux/get-travaux",
      {
        params: {
          ...info,
        },
      }
    );
    dispatch({ type: GET_TRAVAUX_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_TRAVAUX_FAIL, payload: error.response });
  }
};
//add travaux
export const update_travaux_action = (travaux) => async (dispatch) => {
  dispatch({ type: UPDATE_TRAVAUX_REQUEST });
  try {
    const { data } = await axios.post(
      "http://13.48.149.62/api/travaux/update-travaux",
      travaux
    );
    dispatch({ type: UPDATE_TRAVAUX_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_TRAVAUX_FAIL, payload: error.response });
  }
};
//add travaux
export const delete_travaux_action = (id) => async (dispatch) => {
  dispatch({ type: DELETE_TRAVAUX_REQUEST });
  try {
    const { data } = await axios.delete(
      "http://13.48.149.62/api/travaux/add-travaux",
      {
        params: {
          id,
        },
      }
    );
    dispatch({ type: DELETE_TRAVAUX_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_TRAVAUX_FAIL, payload: error.response });
  }
};
