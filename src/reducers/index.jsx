import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import authoritiesReducer from './authoritiesReducer';

const rootReducer = combineReducers({
    authState: authReducer,
    usersState: usersReducer,
    authoritiesState: authoritiesReducer,
});

export default rootReducer;
