import axios from 'axios';

import {
  GET_MESSAGES,
  MESSAGE_ERROR,
  CLEAR_MESSAGE,
  GET_SENT_MESSAGES,
  SENT_MESSAGE_ERROR,
  CLEAR_SENT_MESSAGE
} from './types';


// Get all received messages
export const getMessages = () => async (dispatch) => {
    dispatch({ type: CLEAR_MESSAGE });
  
    try {
      const res = await axios.get('/api/message');
      //console.log(res)
      dispatch({
        type: GET_MESSAGES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  // Get all sent messages
  export const getsentMessages = () => async (dispatch) => {
    dispatch({ type: CLEAR_SENT_MESSAGE });
  
    try {
      const res = await axios.get('/api/message/sent');
      //console.log(res)
      dispatch({
        type: GET_SENT_MESSAGES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: SENT_MESSAGE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };