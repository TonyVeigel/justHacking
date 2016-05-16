import * as constants from '../constants/constants';

export const updatePlayerName = (name, player) => {
  return{
    type:constants.UPDATE_PLAYER_NAME,
    name,
    player
  };
}

export const updateBoard = (row, col, value) =>{
  return{
    type:constants.UPDATE_BOARD,
    row,
    col,
    value
  };
}
