import { httpGET } from './httpAction';
import { MAPPING } from '../constants/requestMapping';
import { UPDATE_LIST_CODE } from '../constants/actionType';

export const getListCode = (authorization, successCallback, errorCallback) => {
    return (dispatch) => {
        const url = MAPPING.GET_LIST_CODE;
        const successFunc = (data) => {
            dispatch(updateCodeList(data));
            if (successCallback) successCallback();
        };
        httpGET(url, authorization, successFunc, errorCallback);
    };
};

const updateCodeList = (data) => {
    return {
        type: UPDATE_LIST_CODE,
        payload: data,
    };
};
