import { UPDATE_LIST_CODE } from '../constants/actionType';

const initialState = {
    codes: [],
};

const codesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LIST_CODE:
            return {
                ...state, codes: action.payload,
            };
        default:
            return { ...state };
    }
};

export default codesReducer;
