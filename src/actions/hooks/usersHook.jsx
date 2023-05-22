import { useDispatch } from 'react-redux';
import { getListUser } from '../usersAction';

function useUsersAction() {
    const dispatch = useDispatch();
    return {
        getListUser: (body, successCallback, errorCallback) => {
            dispatch(getListUser(body, successCallback, errorCallback));
        },
    };
}

export default useUsersAction;
