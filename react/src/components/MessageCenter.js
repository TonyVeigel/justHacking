import React from 'react';

const MessageCenter = ({messages}) => (
  <div>
    {
     messages.map(message => {
        return <span>{message.priority}</span>
      })
    }
  </div>
)

export default MessageCenter
