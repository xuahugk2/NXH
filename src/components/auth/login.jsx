import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { MESSAGE } from '../../constants/message';
import useAuthAction from '../../actions/hooks/authHook';
import { customTheme } from '../common/customTheme';

const initialState = {
    email: '',
    password: '',
};

export default function Login() {
    const [loginInfo, setLoginInfo] = React.useState({
        email: 'admin@gmail.com',
        password: 'ivc@12345',
    });
    const [errorMessage, setErrorMessage] = React.useState(initialState);

    const { loginUser } = useAuthAction();

    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;

        setLoginInfo({ ...loginInfo, [name]: value });

        if (value) {
            setErrorMessage({
                ...errorMessage,
                [name]: '',
            });
        }
    };

    const checkError = () => {
        let cloneErrorMessage = initialState;
        if (!loginInfo.email) {
            cloneErrorMessage = {
                ...cloneErrorMessage,
                email: MESSAGE.REQUIRED,
            };
        }
        if (!loginInfo.password) {
            cloneErrorMessage = {
                ...cloneErrorMessage,
                password: MESSAGE.REQUIRED,
            };
        }

        setErrorMessage(cloneErrorMessage);

        return cloneErrorMessage.email || cloneErrorMessage.password;
    };

    const handleLogin = async () => {
        if (checkError()) {
            return;
        }
        loginUser(loginInfo, handleRegisterSuccess);
    };

    const handleRegisterSuccess = () => {
        navigate('/');
    };

    return (
        <Container component="main" maxWidth="xs" sx={customTheme.justify}>
            <Grid container item xs={12} display="flex" flexDirection="column" alignItems="center">
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Grid container mt={1}>
                    <Grid item xs={12} mb={1}>
                        <FormControl fullWidth error>
                            <TextField
                                fullWidth
                                margin="normal"
                                id="email"
                                name="email"
                                label="Email Address"
                                autoComplete="off"
                                value={loginInfo.email}
                                onInput={handleInput}
                                error={!!errorMessage.email}
                                InputProps={{
                                    endAdornment: errorMessage.email && <ErrorOutlineIcon color='error' />,
                                }}
                            />
                            <FormHelperText sx={{ height: 2 }} >{errorMessage.email}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} mb={1}>
                        <FormControl fullWidth error>
                            <TextField
                                fullWidth
                                margin="normal"
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="off"
                                value={loginInfo.password}
                                onInput={handleInput}
                                error={!!errorMessage.password}
                                InputProps={{
                                    endAdornment: errorMessage.password && <ErrorOutlineIcon color='error' />,
                                }}
                            />
                            <FormHelperText sx={{ height: 2 }} >{errorMessage.password}</FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleLogin}
                    fullWidth
                >
                    Login
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="/forgot-password" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href='/register' variant="body2">
                            {"Don't have an account?"}
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    );
}
