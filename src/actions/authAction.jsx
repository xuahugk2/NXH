import { httpPOST } from './httpAction';
import { MAPPING } from './../constants/requestMapping';
import { UPDATE_AUTH_INFO } from '../constants/actionType';

export const loginUser = (body, successCallback, errorCallback) => {
    return (dispatch) => {
        const url = MAPPING.LOGIN;
        const successFunc = (data) => {
            dispatch(updateAuthInfo(data));
            if (successCallback) successCallback();
        };
        httpPOST(url, body, successFunc, errorCallback);
    };
};

export const registerUser = (body, successCallback, errorCallback) => {
    return (dispatch) => {
        const url = MAPPING.REGISTER;
        const successFunc = (data) => {
            dispatch(updateAuthInfo(data));
            if (successCallback) successCallback();
        };
        httpPOST(url, body, successFunc, errorCallback);
    };
};

const updateAuthInfo = (userData) => {
    return {
        type: UPDATE_AUTH_INFO,
        payload: userData,
    };
};
