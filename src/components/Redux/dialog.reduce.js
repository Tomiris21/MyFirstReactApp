const NEW_MESSAGE_TEXT = 'NEW-MESSAGE';
const SEND_MESSAGE= 'SEND_MESSAGE;'

const initialState = {dialogsData: [
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
newMessageText: ""
}

const dialogReducer = (state=initialState, action) => {
     if (action.type === NEW_MESSAGE_TEXT) {
 state.newMessageText=action.NEW_MESSAGE_TEXT;}

  else if(action.type=== SEND_MESSAGE) {
    let body = state.newMessageText;
   state.newMessageText = '';
    let sendMessageSecond={
      id:state.MessagePage.message.length+1,
      message: body
    }
    state.message=[...state.MessagePage.message, sendMessageSecond];
  }
  
    return state;
}


export const sendMesssageCreator = () => ({type:SEND_MESSAGE});

export const newMessageTextCreator = (body) => (
{type: NEW_MESSAGE_TEXT, body: body}
) 

export default dialogReducer