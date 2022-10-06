import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import message from './message';
import sentmessage from './sentmessage';

export default combineReducers({
    alert,
    auth,
    message,
    sentmessage
});