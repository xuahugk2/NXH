import { httpPOST } from '../httpAction';
import { MAPPING } from '../../constants/requestMapping';

const authenticateUser = () => {
    return {
        loginUser: (body, successCallback, errorCallback) => {
            const url = MAPPING.LOGIN;
            httpPOST(url, body, successCallback, errorCallback);
        },
    };
};

export default authenticateUser;
