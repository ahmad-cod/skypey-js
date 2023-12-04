import _ from 'lodash';
import { contacts } from "../static-data";
import { DELETE_CONTACT } from "../constants/action-types";

export default (state = contacts, action) => {
    switch (action.type) {
        case DELETE_CONTACT:
            return _.omit(state, action.payload);
                
        default:
            return state;
    }
};