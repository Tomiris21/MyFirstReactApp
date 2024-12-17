import { combineReducers } from "redux";
import profileReducer from "./profile.reduce";
import dialogReducer from "./dialog.reduce";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
  ProfilePage: profileReducer,
  DialogPage: dialogReducer,
});

const store = configureStore({ reducer: reducers });

export default store;
