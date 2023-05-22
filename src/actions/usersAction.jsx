import { httpGET } from './httpAction';
import { MAPPING } from './../constants/requestMapping';
import { UPDATE_LIST_USER } from '../constants/actionType';

export const getListUser = (body, successCallback, errorCallback) => {
    return (dispatch) => {
        const url = MAPPING.GET_LIST_USER;
        const successFunc = (data) => {
            dispatch(updateUserList(data));
            if (successCallback) successCallback();
        };
        httpGET(url, successFunc, errorCallback);
    };
};

const updateUserList = (userData) => {
    return {
        type: UPDATE_LIST_USER,
        payload: userData,
    };
};