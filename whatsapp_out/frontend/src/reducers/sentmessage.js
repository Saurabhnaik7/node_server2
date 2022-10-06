import {
    SENT_MESSAGE_ERROR,
    CLEAR_SENT_MESSAGE,
    GET_SENT_MESSAGES
  } from '../actions/types';
  
  const initialState = {
    sentmessage: null,
    sentmessages: [],
    loading: true,
    error: {}
  };
  
  function sentmessageReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_SENT_MESSAGES:
        return {
          ...state,
          sentmessages: payload,
          loading: false
        };
      case SENT_MESSAGE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
          sentmessage: null
        };
      case CLEAR_SENT_MESSAGE:
        return {
          ...state,
          sentmessage: null,
        };
      default:
        return state;
    }
  }
  
  export default sentmessageReducer;
  