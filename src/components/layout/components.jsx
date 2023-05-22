import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Login from '../auth/login';
import Register from '../auth/register';
import ForgotPassword from '../auth/forgot';
import Dashboard from '../dashboard/dashboard';

export default function Components() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Auth */}
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />

                {/* Main */}
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}
