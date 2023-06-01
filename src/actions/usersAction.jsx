import { httpDELETE, httpGET, httpPOST, httpPUT } from './httpAction';
import { MAPPING } from './../constants/requestMapping';
import { UPDATE_LIST_USER } from '../constants/actionType';

export const getListUser = (authorization, successCallback, errorCallback) => {
    return (dispatch) => {
        const url = MAPPING.GET_LIST_USER;
        const successFunc = (data) => {
            dispatch(updateUserList(data));
            if (successCallback) successCallback();
        };
        httpGET(url, authorization, successFunc, errorCallback);
    };
};

export const deleteUser = (param, authorization, successCallback, errorCallback) => {
    return () => {
        const url = MAPPING.USER_ACTION + param;
        httpDELETE(url, authorization, successCallback, errorCallback);
    };
};

export const updateUser = (param, body, authorization, successCallback, errorCallback) => {
    return () => {
        const url = MAPPING.USER_ACTION + param;
        httpPUT(url, body, authorization, successCallback, errorCallback);
    };
};

export const createUser = (body, authorization, successCallback, errorCallback) => {
    return () => {
        const url = MAPPING.CREATE_USER;
        httpPOST(url, body, authorization, successCallback, errorCallback);
    };
};

const updateUserList = (userData) => {
    return {
        type: UPDATE_LIST_USER,
        payload: userData,
    };
};
