import { DELETE_CONTACT, SEND_MESSAGE, SET_ACTIVE_USER_ID, SET_TYPING_VALUE} from "../constants/action-types";
export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const deleteContact = id => ({
    type: DELETE_CONTACT,
    payload: id
});

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
})

export const sendMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
})