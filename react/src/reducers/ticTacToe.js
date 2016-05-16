import {UPDATE_BOARD, UPDATE_PLAYER_NAME} from '../constants/constants';


const initialState = {
  players:{player1:{name:''}, player2:{name:''}},
  board: [['','',''],['','',''],['','','']],
  turn: 'player1',
  winner:''
}

function player(state, action){
  switch (action.type) {
    case UPDATE_PLAYER_NAME:
      return {...state, name:action.name};
    default:
      return state;
  }
}

export const ticTacToe = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_BOARD:
      state.board[action.row][action.col] = action.value;
      return {...state, board: state.board, turn:'player2', winner: checkStatus(state.board)};
    case UPDATE_PLAYER_NAME:
      return {...state, players:{...state.players, [action.player]:player(state.players[action.player], action)}}
    default:
      return state;
  }
}


function checkStatus(board){

  let winner = '';

  for (let i = 0; i < 3; i++){
    if (board[i][0] == board[i][1] && board[i][1] == board[i][2]){
        winner = board[i][0];
      }
  }
  for (let i = 0; i < 3; i++){
      if (board[0][i] == board[1][i] && board[1][i] == board[2][i]){
          winner = board[0][1];
        }
  }
  if ((board[0][0] == board[1][1] && board[1][1] == board[2][2]) ||(board[0][2] == board[1][1] && board[1][1] == board[2][0])){
        winner = board[1][1];
  }
  return winner;
}
