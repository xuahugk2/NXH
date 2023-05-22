import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import SignIn from './components/auth/login';
import Register from './components/auth/register';
import ForgotPassword from './components/auth/forgot';
import Dashboard from './components/dashboard/dashboard';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Auth */}
                <Route path='/login' element={<SignIn />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />

                {/* Dashboard */}
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
