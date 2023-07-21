import {
  CREATE_MESSAGE_FAIL,
  CREATE_MESSAGE_REQUEST,
  CREATE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAIL,
  DELETE_MESSAGE_REQUEST,
  DELETE_MESSAGE_SUCCESS,
  GET_MESSAGES_FAIL,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
} from "../Constants/MessageConstants";
import axios from "axios";
import {
  GET_USER_CONVOS_FAIL,
  GET_USER_CONVOS_REQUEST,
  GET_USER_CONVOS_SUCCESS,
} from "../Constants/MessageConstants";

//get messages
export const get_messages_action = (token, user_id) => async (dispatch) => {
  dispatch({ type: GET_MESSAGES_REQUEST });
  try {
    const { data } = await axios.get(
      "http://13.48.149.62/api/message/get-messages",
      {
        headers: {
          token,
        },
        params: {
          id: user_id,
        },
      }
    );
    dispatch({ type: GET_MESSAGES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_MESSAGES_FAIL, payload: error.response });
  }
};

//get user convos
export const get_user_convos_action = (token, user_id) => async (dispatch) => {
  dispatch({ type: GET_USER_CONVOS_REQUEST });
  try {
    const { data } = await axios.get(
      "http://13.48.149.62/api/message/get-convos",
      {
        headers: {
          token,
        },
        params: {
          userId: user_id,
        },
      }
    );
    dispatch({ type: GET_USER_CONVOS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_CONVOS_FAIL, payload: error.response });
  }
};

//add metier
export const add_message_action = (token, message) => async (dispatch) => {
  dispatch({ type: CREATE_MESSAGE_REQUEST });
  try {
    const { data } = await axios.post(
      "http://13.48.149.62/api/message/add-message",
      message,
      {
        headers: {
          token,
        },
      }
    );
    dispatch({ type: CREATE_MESSAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_MESSAGE_FAIL, payload: error.response });
  }
};

//delete metier
export const delete_metiers_action =
  (token = null, id) =>
  async (dispatch) => {
    dispatch({ type: DELETE_MESSAGE_REQUEST });
    try {
      const { data } = await axios.delete(
        "http://13.48.149.62/api/metier/delete-message",
        {
          headers: {
            token,
          },
          params: {
            id,
          },
        }
      );
      dispatch({ type: DELETE_MESSAGE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELETE_MESSAGE_FAIL, payload: error.response });
    }
  };
