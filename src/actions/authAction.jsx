import { loginUser, registerUser } from './hooks/authHook';

const authAction = () => {
    return {
        loginUser: (body, successCallback, errorCallback) => {
            loginUser(body, successCallback, errorCallback);
        },
        registerUser: (body, successCallback, errorCallback) => {
            registerUser(body, successCallback, errorCallback);
        },
    };
};

export default authAction;
