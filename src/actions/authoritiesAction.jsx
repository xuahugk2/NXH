import { httpGET } from './httpAction';
import { MAPPING } from '../constants/requestMapping';
import { UPDATE_LIST_AUTHORITY } from '../constants/actionType';
import { serializeParameters } from '../utils/helper';

export const getListAuthority = (body, successCallback, errorCallback) => {
    return (dispatch) => {
        const url = MAPPING.GET_LIST_AUTHORITY + serializeParameters(body);
        const successFunc = (data) => {
            dispatch(updateAuthorityList(data));
            if (successCallback) successCallback();
        };
        httpGET(url, successFunc, errorCallback);
    };
};

const updateAuthorityList = (data) => {
    return {
        type: UPDATE_LIST_AUTHORITY,
        payload: data,
    };
};
