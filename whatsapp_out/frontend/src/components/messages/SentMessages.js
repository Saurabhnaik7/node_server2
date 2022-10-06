import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SentMessageItem from './SentMessageItem';
import { getsentMessages } from '../../actions/message';
import { Link } from 'react-router-dom';

const SentMessages = ({ getsentMessages, sentmessage : {sentmessages ,loading}}) => {
  useEffect(() => {
    getsentMessages();
  }, [getsentMessages]);

  return(
    <section className="container">
        <Fragment>
        <Link to="/dashboard" className="btn">
          Back To Dashboard
        </Link>
          <br />
          <h1 className="medium text-primary">Sent Messages</h1>
          <br />
          <div>
            {sentmessages.length > 0 ? (
              sentmessages.map((sentmessage) => (
                <SentMessageItem key={sentmessage._id} sentmessage={sentmessage} />
              ))
            ) : (
              <h4>No messages found...</h4>
            )}
          </div>
        </Fragment>
    </section>
  );
}; 

SentMessages.propTypes = {
  getsentMessages: PropTypes.func.isRequired,
  sentmessage: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  sentmessage: state.sentmessage
});

export default connect(mapStateToProps, { getsentMessages })(SentMessages);

