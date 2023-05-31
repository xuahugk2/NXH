import { useSelector } from 'react-redux';

const useAuthoritiesState = () => {
    const authoritiesState = useSelector((state) => state.authoritiesState);
    const { authorities } = authoritiesState;
    return {
        authorities,
    };
};

export default useAuthoritiesState;
