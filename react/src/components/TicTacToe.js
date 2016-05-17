import React,{Component} from 'react';
import Players from './Players';
import Board from './Board';

export default class TicTacToe extends Component{


  render(){
    const {game, updatePlayerName, updateBoard} = this.props;
    return (
      <div>
        <div>Winner: {game.winner ? game.turn : ''} </div>
        <div>Turn:{game.turn}</div>
        <Players updatePlayerName={updatePlayerName} game={game}/>
        <Board updateBoard={updateBoard} board={game.board}/>
      </div>
    )
  }


}
