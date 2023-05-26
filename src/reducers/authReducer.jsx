import { UPDATE_AUTH_INFO, LOGOUT } from '../constants/actionType';

const initialState = {
    authInfo: {},
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_AUTH_INFO:
            return {
                ...state, authInfo: action.payload,
            };
        case LOGOUT:
            return { ...initialState };
        default:
            return { ...state };

    }
};

export default authReducer;
