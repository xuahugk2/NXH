import { useDispatch } from 'react-redux';
import { getListAuthority } from '../authoritiesAction';

function useAuthoritiesAction() {
    const dispatch = useDispatch();
    return {
        getListAuthority: (authorization, successCallback, errorCallback) => {
            dispatch(getListAuthority(authorization, successCallback, errorCallback));
        },
    };
}

export default useAuthoritiesAction;
