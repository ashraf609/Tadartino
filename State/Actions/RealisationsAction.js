import {
  ADD_REALS_FAIL,
  ADD_REALS_REQUEST,
  ADD_REALS_SUCCESS,
  DELETE_REALS_FAIL,
  DELETE_REALS_REQUEST,
  DELETE_REALS_SUCCESS,
  GET_REALS_FAIL,
  GET_REALS_REQUEST,
  GET_REALS_SUCCESS,
} from "../Constants/RealisationsConstants";
import axios from "axios";

//add REALS
export const add_real_action = (info) => async (dispatch) => {
  dispatch({ type: ADD_REALS_REQUEST });
  try {
    const { data } = await axios.put(
      "http://13.48.149.62/api/real/add-real",
      info
    );
    dispatch({ type: ADD_REALS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_REALS_FAIL, payload: error.response });
  }
};

//get REALS
export const get_reals_action = (info) => async (dispatch) => {
  dispatch({ type: GET_REALS_REQUEST });
  try {
    const { data } = await axios.get("http://13.48.149.62/api/real/get-reals", {
      params: {
        ...info,
      },
    });
    dispatch({ type: GET_REALS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_REALS_FAIL, payload: error.response });
  }
};
//delete  realisation
export const delete_real_action = (id) => async (dispatch) => {
  dispatch({ type: DELETE_REALS_REQUEST });
  try {
    const { data } = await axios.delete(
      "http://13.48.149.62/api/real/delete-real",
      {
        params: {
          id,
        },
      }
    );
    dispatch({ type: DELETE_REALS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_REALS_FAIL, payload: error.response });
  }
};
