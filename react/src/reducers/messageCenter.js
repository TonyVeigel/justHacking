import {ADD_MESSAGE, REMOVE_MESSAGE, REMOVE_ALL_MESSAGES} from '../constants/constants';

const initialState = [];

export const messages = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.message]
    case REMOVE_MESSAGE:
      return state.filter( message => message.id != action.id);
    case REMOVE_ALL_MESSAGES:
      return initialState;
    default:
      return state;
  }
}
