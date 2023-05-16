import { httpPOST } from '../httpAction';
import { MAPPING } from '../../constants/requestMapping';

export const loginUser = (body, successCallback, errorCallback) => {
    const url = MAPPING.LOGIN;
    httpPOST(url, body, successCallback, errorCallback);
};

export const registerUser = (body, successCallback, errorCallback) => {
    const url = MAPPING.REGISTER;
    httpPOST(url, body, successCallback, errorCallback);
};
