import { type } from "@testing-library/user-event/dist/type";
import profileReducer from "./profile.reduce";
import dialogReducer from "./dialog.reduce";

let store = {
  _state: {
    ProfilePage: {
      postDate: [
        { id: 1, post: "Hi", likesCount: 12 },
        { id: 2, post: "Its my first post!", likesCount: 15 },
      ],
    },
    DialogPage: {
      dialogsData: [
        { id: 1, name: "Alexandr" },
        { id: 2, name: "Inna" },
        { id: 3, name: "Olga" },
        { id: 4, name: "Olga" },
        { id: 5, name: "Oxana" },
      ],

      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Hello" },
        { id: 4, message: "" },
        { id: 5, message: "" },
      ],
      newMessageText: "",
    },
  },
  getState() {
    return this._state;
  },
  rerenderEntireTree() {},
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
    this._state.DialogPage = dialogReducer(this._state.DialogPage, action);
    this._rerenderEntireTree(this._state);
  },
};

export default store;
