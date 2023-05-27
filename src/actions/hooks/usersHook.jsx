import { useDispatch } from 'react-redux';
import { getListUser, deleteUser, updateUser, createUser } from '../usersAction';

function useUsersAction() {
    const dispatch = useDispatch();
    return {
        getListUser: (body, successCallback, errorCallback) => {
            dispatch(getListUser(body, successCallback, errorCallback));
        },
        deleteUser: (params, successCallback, errorCallback) => {
            dispatch(deleteUser(params, successCallback, errorCallback));
        },
        updateUser: (params, body, successCallback, errorCallback) => {
            dispatch(updateUser(params, body, successCallback, errorCallback));
        },
        createUser: (body, successCallback, errorCallback) => {
            dispatch(createUser(body, successCallback, errorCallback));
        },
    };
}

export default useUsersAction;
