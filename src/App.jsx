import './App.css'
import SignIn from './components/auth/login'
import Register from './components/auth/register'
import ForgotPassword from './components/auth/forgot'
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Auth */}
                <Route path='/login' element={<SignIn />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />

                {/* Main */}
                <Route path='/' element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
