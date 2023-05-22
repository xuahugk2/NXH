import { UPDATE_LIST_USER } from '../constants/actionType';

const initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    if (action.type === UPDATE_LIST_USER) {
        return {
            ...state, users: action.payload,
        };
    } else {
        return { ...state };
    }
};

export default usersReducer;
