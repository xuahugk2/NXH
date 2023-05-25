import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { MESSAGE } from '../../constants/message';
import useAuthAction from '../../actions/hooks/authHook';
import { customTheme } from '../common/customTheme';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

export default function Register() {
    const [registerInfo, setRegisterInfo] = React.useState(initialState);
    const [errorMessage, setErrorMessage] = React.useState(initialState);

    const { registerUser } = useAuthAction();

    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;

        setRegisterInfo({ ...registerInfo, [name]: value });

        if (value) {
            setErrorMessage({
                ...errorMessage,
                [name]: '',
            });
        }
    };

    const checkError = () => {
        let cloneErrorMessage = initialState;
        if (!registerInfo.email) {
            cloneErrorMessage = {
                ...cloneErrorMessage,
                email: MESSAGE.REQUIRED,
            };
        }
        if (!registerInfo.password) {
            cloneErrorMessage = {
                ...cloneErrorMessage,
                password: MESSAGE.REQUIRED,
            };
        }
        if (!registerInfo.firstName) {
            cloneErrorMessage = {
                ...cloneErrorMessage,
                firstName: MESSAGE.REQUIRED,
            };
        }
        if (!registerInfo.lastName) {
            cloneErrorMessage = {
                ...cloneErrorMessage,
                lastName: MESSAGE.REQUIRED,
            };
        }

        setErrorMessage(cloneErrorMessage);

        return cloneErrorMessage.email || cloneErrorMessage.password || cloneErrorMessage.firstName || cloneErrorMessage.lastName;
    };

    const handleRegister = async () => {
        if (checkError()) {
            console.log('error');
            return;
        }
        registerUser(registerInfo, handleRegisterSuccess);
    };

    const handleRegisterSuccess = () => {
        navigate('/');
    };

    return (
        <Container component="main" maxWidth="xs" sx={customTheme.justify}>
            <Grid container item xs={12} display="flex" flexDirection="column" alignItems="center">
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <PersonAddIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <Box component="form" sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} mb={1}>
                            <FormControl fullWidth error>
                                <TextField
                                    fullWidth
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    autoComplete="off"
                                    value={registerInfo.firstName}
                                    onInput={handleInput}
                                    error={!!errorMessage.firstName}
                                    InputProps={{
                                        endAdornment: errorMessage.firstName && <ErrorOutlineIcon color='error' />,
                                    }}
                                />
                                <FormHelperText sx={{ height: 2 }}>{errorMessage.firstName}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} mb={1}>
                            <FormControl fullWidth error>
                                <TextField
                                    fullWidth
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    autoComplete="off"
                                    value={registerInfo.lastName}
                                    onInput={handleInput}
                                    error={!!errorMessage.lastName}
                                    InputProps={{
                                        endAdornment: errorMessage.lastName && <ErrorOutlineIcon color='error' />,
                                    }}
                                />
                                <FormHelperText sx={{ height: 2 }}>{errorMessage.lastName}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} mb={1}>
                            <FormControl fullWidth error>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email Address"
                                    autoComplete="off"
                                    value={registerInfo.email}
                                    onInput={handleInput}
                                    error={!!errorMessage.email}
                                    InputProps={{
                                        endAdornment: errorMessage.email && <ErrorOutlineIcon color='error' />,
                                    }}
                                />
                                <FormHelperText sx={{ height: 2 }}>{errorMessage.email}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} mb={1}>
                            <FormControl fullWidth error>
                                <TextField
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    autoComplete="off"
                                    value={registerInfo.password}
                                    onInput={handleInput}
                                    error={!!errorMessage.password}
                                    InputProps={{
                                        endAdornment: errorMessage.password && <ErrorOutlineIcon color='error' />,
                                    }}
                                />
                                <FormHelperText sx={{ height: 2 }}>{errorMessage.password}</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleRegister}
                    >
                        Register
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Grid >
        </Container >
    );
}
