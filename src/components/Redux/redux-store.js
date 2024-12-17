import { combineReducers } from "redux";
import profileReducer from "./profile.reduce";
import dialogReducer from "./dialog.reduce";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    ProfilePage: profileReducer,
    DialogPage: dialogReducer,
  },
});

export default store;
