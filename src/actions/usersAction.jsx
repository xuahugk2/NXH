import { httpDELETE, httpGET, httpPOST, httpPUT } from './httpAction';
import { MAPPING } from './../constants/requestMapping';
import { UPDATE_LIST_USER } from '../constants/actionType';
import { serializeParameters } from '../utils/helper';

export const getListUser = (body, successCallback, errorCallback) => {
    return (dispatch) => {
        const url = MAPPING.GET_LIST_USER + serializeParameters(body);
        const successFunc = (data) => {
            dispatch(updateUserList(data));
            if (successCallback) successCallback();
        };
        httpGET(url, successFunc, errorCallback);
    };
};

export const deleteUser = (param, successCallback, errorCallback) => {
    return (dispatch) => {
        const url = MAPPING.USER_ACTION + param;
        const successFunc = (data) => {
            dispatch(updateUserList(data));
            if (successCallback) successCallback();
        };
        httpDELETE(url, successFunc, errorCallback);
    };
};

export const updateUser = (param, body, successCallback, errorCallback) => {
    return (dispatch) => {
        const url = MAPPING.USER_ACTION + param;
        const successFunc = (data) => {
            dispatch(updateUserList(data));
            if (successCallback) successCallback();
        };
        httpPUT(url, body, successFunc, errorCallback);
    };
};

export const createUser = (body, successCallback, errorCallback) => {
    return () => {
        const url = MAPPING.CREATE_USER;
        httpPOST(url, body, successCallback, errorCallback);
    };
};

const updateUserList = (userData) => {
    return {
        type: UPDATE_LIST_USER,
        payload: userData,
    };
};
