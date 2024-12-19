const NEW_MESSAGE_TEXT = "NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  dialogsData: [
    { id: 1, name: "Sasha" },
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
};

const dialogReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.body };
    case SEND_MESSAGE:
      let body = stateCopy.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMesssageCreator = () => ({ type: SEND_MESSAGE });

export const newMessageTextCreator = (body) => ({
  type: NEW_MESSAGE_TEXT,
  body: body, // использовано правильное имя поля
});

export default dialogReducer;
