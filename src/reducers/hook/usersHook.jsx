import { useSelector } from 'react-redux';

const useUsersState = () => {
    const usersState = useSelector((state) => state.usersState);
    const { users } = usersState;
    return {
        users,
    };
};

export default useUsersState;
