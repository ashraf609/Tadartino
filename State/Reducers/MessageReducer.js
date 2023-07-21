import {
  CREATE_MESSAGE_FAIL,
  CREATE_MESSAGE_REQUEST,
  CREATE_MESSAGE_SUCCESS,
  GET_MESSAGES_FAIL,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  GET_USER_CONVOS_FAIL,
  GET_USER_CONVOS_REQUEST,
  GET_USER_CONVOS_SUCCESS,
} from "../Constants/MessageConstants";

//get message reducer
export const get_messages_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MESSAGES_REQUEST:
      return { loading: true };
    case GET_MESSAGES_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_MESSAGES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get user convos reducer
export const get_user_convos_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_CONVOS_REQUEST:
      return { loading: true };
    case GET_USER_CONVOS_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_USER_CONVOS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//add message reducer
export const add_message_reducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_MESSAGE_REQUEST:
      return { loading: true };
    case CREATE_MESSAGE_SUCCESS:
      return { loading: false, data: action.payload };
    case CREATE_MESSAGE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
