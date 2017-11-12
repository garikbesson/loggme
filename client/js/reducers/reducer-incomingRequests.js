import _ from 'lodash'

const defaultState = {
    incomingRequests: []
};

export const incomingRequests = (state = defaultState.incomingRequests, action) => {
    let _state = _.merge({}, state);

    return _state;
};
