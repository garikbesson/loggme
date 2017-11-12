import {combineReducers} from 'redux';
import {incomingRequests} from './reducer-incomingRequests';
import _ from 'lodash';

const defaultState = {
    lastAction: { type: "init" }
};

function lastAction(state, action) {
    return _.merge({}, action);
}

const allReducers = combineReducers({
    incomingRequests: incomingRequests,
    lastAction
});

export default allReducers
