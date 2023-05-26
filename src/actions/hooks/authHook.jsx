import { useDispatch } from 'react-redux';
import { loginUser, registerUser, logoutUser } from '../authAction';

function useAuthAction() {
    const dispatch = useDispatch();
    return {
        loginUser: (body, successCallback, errorCallback) => {
            dispatch(loginUser(body, successCallback, errorCallback));
        },
        registerUser: (body, successCallback, errorCallback) => {
            dispatch(registerUser(body, successCallback, errorCallback));
        },
        logoutUser: (successCallback, errorCallback) => {
            dispatch(logoutUser(successCallback, errorCallback));
        },
    };
}

export default useAuthAction;
