import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import TicTacToeView from '../components/TicTacToe';
import {updatePlayerName, updateBoard} from '../actions/ticTacToe';

class TicTacToe extends Component{

  constructor(props){
    super(props);
    this.handleUpdatePlayerName = this.handleUpdatePlayerName.bind(this);
    this.handleUpdateBoard = this.handleUpdateBoard.bind(this);
  }

  handleUpdatePlayerName(name, player){
    const {dispatch} = this.props;
    dispatch(updatePlayerName(name, player))
  }

  handleUpdateBoard(row, column, value){
    const {dispatch} = this.props;
    dispatch(updateBoard(row, column, value))
  }

  render(){
    const {game} = this.props;
    return(
      <div>
        <TicTacToeView updateBoard={this.handleUpdateBoard} updatePlayerName={this.handleUpdatePlayerName} game={game}/>
      </div>
    )
  }

}

TicTacToe.PropTypes = {
  game: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    game: state.ticTacToe
  };
}

export default connect(mapStateToProps)(TicTacToe)
