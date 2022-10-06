import React from 'react';
import PropTypes from 'prop-types';

//destructure the message items
const SentMessageItem = ({
  sentmessage: {
    display_phone_number,
    phone_number_id,
    type,
    message_text,
    media_id,
    filename,
    to,
    timestamp

  }
}) => {
  return (
    <div className='message bg-light'>
      <div>
        <p>Display Phone Number :  {display_phone_number}</p>
        <p>Phone Number id:  {phone_number_id}</p>
        <p>Type :  {type}</p>
        <p>Message_text :  {message_text}</p>
        <p>Media id :  {media_id}</p>
        <p>Filename :  {filename}</p>
        <p>To :  {to}</p>
        <p>Timestamp :  {timestamp}</p>
      </div>
    </div>
  );
};

SentMessageItem.propTypes = {
  sentmessage: PropTypes.object.isRequired
};

export default SentMessageItem;
