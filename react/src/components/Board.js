import React,{Component} from 'react';
import Square from './Square';

class Board extends Component{

  updateBoard(row, col, value){
    const {updateBoard} = this.props;
    updateBoard(row,col,value);
  }

  render(){
    const {board, updateBoard} = this.props;
    return(
      <div>
        {
          board.map( (row, rowNum) => {
            return <div> {row.map((column, colNum) => {
                return <Square updateBoard={this.updateBoard.bind(this, rowNum, colNum)}/>
              })}
            </div>
          })
        }
      </div>
    )
  }

}

export default Board
