const NEW_MESSAGE_TEXT = 'NEW-MESSAGE';
const SEND_MESSAGE= 'SEND_MESSAGE;'

const dialogReducer = (state, action) => {
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