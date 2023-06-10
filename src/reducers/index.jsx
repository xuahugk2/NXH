import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import codesReducer from './codesReducer';

const rootReducer = combineReducers({
    authState: authReducer,
    usersState: usersReducer,
    codesState: codesReducer,
});

export default rootReducer;
