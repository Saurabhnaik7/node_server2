import React from 'react';
import PropTypes from 'prop-types';

//destructure the message items
const MessageItem = ({
  message: {
    name,
    from,
    body,
    type,
    timestamp
  }
}) => {
  return (
    <div className='message bg-light'>
      <div>
        <p>Name :  {name}</p>
        <p>Phone Number :  {from}</p>
        <p>Message :  {body}</p>
        <p>Type :  {type}</p>
        <p>Timestamp :  {timestamp}</p>
      </div>
    </div>
  );
};

MessageItem.propTypes = {
  message: PropTypes.object.isRequired
};

export default MessageItem;
