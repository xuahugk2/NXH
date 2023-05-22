import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    authState: authReducer,
    usersState: usersReducer,
});

export default rootReducer;
