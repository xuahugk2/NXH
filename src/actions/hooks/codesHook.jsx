import { useDispatch } from 'react-redux';
import { getListCode } from '../codesAction';

function useCodesAction() {
    const dispatch = useDispatch();
    return {
        getListCode: (authorization, successCallback, errorCallback) => {
            dispatch(getListCode(authorization, successCallback, errorCallback));
        },
    };
}

export default useCodesAction;
