import { UPDATE_LIST_USER, LOGOUT } from '../constants/actionType';

const initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LIST_USER:
            return {
                ...state, users: action.payload,
            };
        case LOGOUT:
            return { ...initialState };
        default:
            return { ...state };
    }
};

export default usersReducer;
