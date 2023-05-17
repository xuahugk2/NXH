import { useSelector } from 'react-redux';

const useAuthState = () => {
    const authState = useSelector((state) => state.authState);
    const { authInfo } = authState;
    return {
        authInfo,
    };
};

export default useAuthState;
