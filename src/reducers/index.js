import { combineReducers } from 'redux';
import user from './user';
import contacts from './contacts';
import typing from './typing';
import messages from './messages';
import activeUserId from './activeUserId';

export default combineReducers({
    user,
    typing,
    contacts,
    messages,
    activeUserId
});