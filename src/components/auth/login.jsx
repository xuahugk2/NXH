import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';
import { FormControl, FormHelperText } from '@mui/material';

const initialInfo = {
    email: '',
    password: '',
};

export default function Login() {
    const [loginInfo, setLoginInfo] = React.useState(initialInfo);

    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;

        setLoginInfo({ ...loginInfo, [name]: value });
    };

    const checkError = () => {
        return errorMessage.email || errorMessage.password;
    }

    const handleLogin = () => {
        if (checkError()) {
            return;
        }
        navigate('/');
    };

    const errorMessage = React.useMemo(() => {
        return {
            email: !loginInfo.email ? 'This field is required.' : '',
            password: !loginInfo.password ? 'This field is required.' : '',
        }
    }, [loginInfo.email, loginInfo.password])

    return (
        <Container component="main" maxWidth="xs">
            <Grid container item xs={12} display="flex" flexDirection="column" alignItems="center">
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Grid container mt={1}>
                    <Grid item xs={12} mb={1}>
                        <FormControl fullWidth error>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="off"
                                autoFocus
                                value={loginInfo.email}
                                onInput={handleInput}
                                error={!!errorMessage.email}
                                InputProps={{
                                    endAdornment: errorMessage.email && <ErrorOutlineIcon color='error' />
                                }}
                            />
                            <FormHelperText sx={{ height: 2 }} >{errorMessage.email}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} mb={1}>
                        <FormControl fullWidth error>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="off"
                                value={loginInfo.password}
                                onInput={handleInput}
                                error={!!errorMessage.password}
                                InputProps={{
                                    endAdornment: errorMessage.password && <ErrorOutlineIcon color='error' />
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
        </Container>
    );
}