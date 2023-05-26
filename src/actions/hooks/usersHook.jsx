import { useDispatch } from 'react-redux';
import { getListUser, deleteUser } from '../usersAction';

function useUsersAction() {
    const dispatch = useDispatch();
    return {
        getListUser: (body, successCallback, errorCallback) => {
            dispatch(getListUser(body, successCallback, errorCallback));
        },
        deleteUser: (params, successCallback, errorCallback) => {
            dispatch(deleteUser(params, successCallback, errorCallback));
        },
    };
}

export default useUsersAction;
