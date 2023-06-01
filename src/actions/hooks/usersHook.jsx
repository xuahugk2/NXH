import { useDispatch } from 'react-redux';
import { getListUser, deleteUser, updateUser, createUser } from '../usersAction';

function useUsersAction() {
    const dispatch = useDispatch();
    return {
        getListUser: (body, authorization, successCallback, errorCallback) => {
            dispatch(getListUser(body, authorization, successCallback, errorCallback));
        },
        deleteUser: (params, authorization, successCallback, errorCallback) => {
            dispatch(deleteUser(params, authorization, successCallback, errorCallback));
        },
        updateUser: (params, body, authorization, successCallback, errorCallback) => {
            dispatch(updateUser(params, body, authorization, successCallback, errorCallback));
        },
        createUser: (body, authorization, successCallback, errorCallback) => {
            dispatch(createUser(body, authorization, successCallback, errorCallback));
        },
    };
}

export default useUsersAction;
