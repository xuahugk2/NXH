import { UPDATE_AUTH_INFO } from '../constants/actionType';

const initialState = {
    authInfo: {},
};

const authReducer = (state = initialState, action) => {
    if (action.type === UPDATE_AUTH_INFO) {
        return {
            ...state, authInfo: action.payload,
        };
    } else {
        return { ...state };
    }
};

export default authReducer;
