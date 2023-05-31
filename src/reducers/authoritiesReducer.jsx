import { UPDATE_LIST_AUTHORITY } from '../constants/actionType';

const initialState = {
    authorities: [],
};

const authoritiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LIST_AUTHORITY:
            return {
                ...state, authorities: action.payload,
            };
        default:
            return { ...state };
    }
};

export default authoritiesReducer;
