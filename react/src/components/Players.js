import React from 'react';


const Players = ({game, updatePlayerName}) => (
  <div>
    <div className='row'>
      <div className='col-md-6'>
        Player1: <input type='text' value={game.player1} onChange={ e => updatePlayerName(e.target.value, 'player1')}/>
      </div>
      <div className='col-md-6'>
        Player2: <input type='text' value={game.player2} onChange={e => updatePlayerName(e.target.value, 'player2')}/>
      </div>
    </div>
  </div>
)

export default Players
