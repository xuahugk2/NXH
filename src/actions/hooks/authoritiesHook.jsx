import { useDispatch } from 'react-redux';
import { getListAuthority } from '../authoritiesAction';

function useAuthoritiesAction() {
    const dispatch = useDispatch();
    return {
        getListAuthority: (body, successCallback, errorCallback) => {
            dispatch(getListAuthority(body, successCallback, errorCallback));
        },
    };
}

export default useAuthoritiesAction;
