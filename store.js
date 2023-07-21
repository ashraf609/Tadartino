import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";

import {
  delete_user_reducer,
  get_personal_info_reducer,
  get_users_reducer,
  loginReducer,
  registerReducer,
  update_user_reducer,
} from "./State/Reducers/UserReducer";
import {
  add_metiers_reducer,
  delete_metiers_reducer,
  get_metier_users_reducer,
  get_metiers_reducer,
  get_single_metiers_reducer,
  search_parent_metiers_reducer,
  update_metiers_reducer,
} from "./State/Reducers/MetierReducer";
import {
  add_message_reducer,
  get_messages_reducer,
  get_user_convos_reducer,
} from "./State/Reducers/MessageReducer";
import {
  add_travaux_reducer,
  delete_travaux_reducer,
  get_travaux_reducer,
  update_travaux_reducer,
} from "./State/Reducers/TravauxReducer";
import {
  add_real_reducer,
  delete_real_reducer,
  get_reals_reducer,
} from "./State/Reducers/RealisationsReducer";

const initialState = {
  user_info: {
    user: {},
  },
};

const reducer = combineReducers({
  //user
  user_info: loginReducer,
  user_register: registerReducer,
  personal_data: get_personal_info_reducer,
  get_users: get_users_reducer,
  update_user: update_user_reducer,
  delete_user: delete_user_reducer,

  //metiers
  get_metiers: get_metiers_reducer,
  get_metier_users: get_metier_users_reducer,
  get_single_metier: get_single_metiers_reducer,
  search_parent: search_parent_metiers_reducer,
  add_metier: add_metiers_reducer,
  update_metier: update_metiers_reducer,
  delete_metier: delete_metiers_reducer,

  //travaux
  get_travaux: get_travaux_reducer,
  add_travaux: add_travaux_reducer,
  update_travaux: update_travaux_reducer,
  delete_travaux: delete_travaux_reducer,

  //realisations
  get_reals: get_reals_reducer,
  add_real: add_real_reducer,
  delete_real: delete_real_reducer,

  //messages
  get_messages: get_messages_reducer,
  get_user_convos: get_user_convos_reducer,
  add_message: add_message_reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  //composeWithDevTools(applyMiddleware(thunk)),
  composeEnhancers(applyMiddleware(thunk))
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
