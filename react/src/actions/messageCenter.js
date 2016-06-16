import {ADD_MESSAGE, REMOVE_MESSAGE, REMOVE_ALL_MESSAGES} from '../constants/constants';

export const addMessage = (messageId, messageText, messageImportance) => {
  return{
    type:ADD_MESSAGE,
    message: {id:messageId, text: messageText, priority: messageImportance}
  };
}
