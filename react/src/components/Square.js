import React from 'react';

const Square = ({updateBoard}) => (

  <span>
    <input type='text' onChange={e => updateBoard(e.target.value)}/>
  </span>

)

export default Square
