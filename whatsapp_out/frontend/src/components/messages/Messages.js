import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';
import { getMessages } from '../../actions/message';
import { Link } from 'react-router-dom';

const Messages = ({ getMessages, message : {messages ,loading}}) => {
  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return(
    <section className="container">
        <Fragment>
        <Link to="/dashboard" className="btn">
          Back To Dashboard
        </Link>
          <br />
          <h1 className="medium text-primary">Received Messages</h1>
          <br/>
          <div>
            {messages.length > 0 ? (
              messages.map((message) => (
                <MessageItem key={message._id} message={message} />
              ))
            ) : (
              <h4>No messages found...</h4>
            )}
          </div>
        </Fragment>
    </section>
  );
}; 

Messages.propTypes = {
  getMessages: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  message: state.message
});

export default connect(mapStateToProps, { getMessages })(Messages);

