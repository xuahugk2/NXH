import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthState from '../../reducers/hook/authHook';

export default function Home() {
    const { authInfo } = useAuthState();

    const navigate = useNavigate();

    React.useEffect(() => {
        console.log(authInfo);
        if (!authInfo?._id) {
            navigate('/login');
        }
    });

    return (
        <div>Home.</div>
    );
}
