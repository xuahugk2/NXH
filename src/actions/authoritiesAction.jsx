import { httpGET } from './httpAction';
import { MAPPING } from '../constants/requestMapping';
import { UPDATE_LIST_AUTHORITY } from '../constants/actionType';

export const getListAuthority = (authorization, successCallback, errorCallback) => {
    return (dispatch) => {
        const url = MAPPING.GET_LIST_AUTHORITY;
        const successFunc = (data) => {
            dispatch(updateAuthorityList(data));
            if (successCallback) successCallback();
        };
        httpGET(url, authorization, successFunc, errorCallback);
    };
};

const updateAuthorityList = (data) => {
    return {
        type: UPDATE_LIST_AUTHORITY,
        payload: data,
    };
};
