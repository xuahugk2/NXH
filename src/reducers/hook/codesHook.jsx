import { useSelector } from 'react-redux';

const useCodesState = () => {
    const codesState = useSelector((state) => state.codesState);
    const { codes } = codesState;
    return {
        codes,
    };
};

export default useCodesState;
