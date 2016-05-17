import {UPDATE_BOARD, UPDATE_PLAYER_NAME} from '../constants/constants';


const initialState = {
  players:{player1:{name:''}, player2:{name:''}},
  board: [['','',''],['','',''],['','','']],
  turn: 'player1'
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
      return {...state, board: state.board, turn: state.turn == 'player1' ? 'player2' : 'player1', winner: winner(state.board) ? state.turn : ''};
    case UPDATE_PLAYER_NAME:
      return {...state, players:{...state.players, [action.player]:player(state.players[action.player], action)}}
    default:
      return state;
  }
}


function winner(board){
  let winner = false;
  for (let i = 0; i < 3; i++){
    if (board[i][0] != '' && board[i][0] == board[i][1] && board[i][1] == board[i][2]){
        return true;
      }
  }
  for (let i = 0; i < 3; i++){
      if (board[0][i] != '' && board[0][i] == board[1][i] && board[1][i] == board[2][i]){
        return true;
        }
  }
  if ((board[0][0] != '' && board[0][0] == board[1][1] && board[1][1] == board[2][2]) || (board[0][2] != '' && board[0][2] == board[1][1] && board[1][1] == board[2][0])){
        return true;
  }
}
