import { httpPOST } from './httpAction';
import { MAPPING } from './../constants/requestMapping';
import { UPDATE_AUTH_INFO, LOGOUT } from '../constants/actionType';

export const loginUser = (body, successCallback, errorCallback) => {
    return (dispatch) => {
        const url = MAPPING.LOGIN;
        const successFunc = (data) => {
            dispatch(updateAuthInfo(data));
            if (successCallback) successCallback();
        };
        httpPOST(url, body, undefined, successFunc, errorCallback);
    };
};

export const registerUser = (body, successCallback, errorCallback) => {
    return (dispatch) => {
        const url = MAPPING.REGISTER;
        const successFunc = (data) => {
            dispatch(updateAuthInfo(data));
            if (successCallback) successCallback();
        };
        httpPOST(url, body, undefined, successFunc, errorCallback);
    };
};

export const logoutUser = (successCallback, errorCallback) => {
    return (dispatch) => {
        dispatch(resetAuthInfo());
        if (successCallback) successCallback();
        if (errorCallback) errorCallback();
    };
};

const updateAuthInfo = (userData) => {
    return {
        type: UPDATE_AUTH_INFO,
        payload: userData,
    };
};

const resetAuthInfo = () => {
    return {
        type: LOGOUT,
        payload: undefined,
    };
};
