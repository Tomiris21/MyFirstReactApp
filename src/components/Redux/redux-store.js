import { combineReducers, createStore } from "redux";
import profileReducer from "./profile.reduce";
import dialogReducer from "./dialog.reduce"

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogReducer})

const store = createStore(reducers);

export default store