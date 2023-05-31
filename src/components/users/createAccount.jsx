import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Autocomplete from '@mui/material/Autocomplete';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { MESSAGE } from '../../constants/message';
import useUsersAction from '../../actions/hooks/usersHook';
import useAuthoritiesAction from '../../actions/hooks/authoritiesHook';
import useAuthState from '../../reducers/hook/authHook';
import useAuthoritiesState from '../../reducers/hook/authoritiesHook';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
};

export default function CreateAccount() {
    const [registerInfo, setRegisterInfo] = React.useState(initialState);
    const [errorMessage, setErrorMessage] = React.useState(initialState);

    const { createUser } = useUsersAction();
    const { authInfo } = useAuthState();

    const { getListAuthority } = useAuthoritiesAction();
    const { authorities } = useAuthoritiesState();

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

    const handleInputSelect = (name, value) => {
        setRegisterInfo({ ...registerInfo, [name]: value.id });

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

        const selectedAuthority = authorities.find(auth => auth.authorityId === registerInfo.role);
        if (!selectedAuthority) {
            cloneErrorMessage = {
                ...cloneErrorMessage,
                role: MESSAGE.REQUIRED,
            };
        }

        setErrorMessage(cloneErrorMessage);

        return cloneErrorMessage.email || cloneErrorMessage.password || cloneErrorMessage.firstName || cloneErrorMessage.lastName;
    };

    const authoritiesAutocompleteData = React.useMemo(() => {
        return authorities.map((authority) => {
            return {
                id: authority.authorityId,
                label: authority.name,
            };
        });
    }, [authorities]);

    const handleRegister = async () => {
        if (checkError()) {
            console.log('error');
            return;
        }
        createUser({
            ...registerInfo,
            reqId: authInfo._id,
            role: Number(registerInfo.role),
        });
    };

    React.useEffect(() => {
        getListAuthority({ _id: authInfo._id });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authInfo._id]);

    return (
        <Container component="main" maxWidth="lg">
            <Grid container display="flex" flexDirection="column" alignItems="center">
                <Grid container sx={{ mt: 3 }}>
                    <Grid item xs={3}>
                        <Typography component="h1" variant="h5">
                            Choose your avatar
                        </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <Grid container item xs={12} spacing={2} mb={2}>
                            <Grid item xs={6}>
                                <Typography textAlign='left' fontWeight='bold'>First Name</Typography>
                                <FormControl fullWidth error>
                                    <TextField
                                        fullWidth
                                        name="firstName"
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
                            <Grid item xs={6}>
                                <Typography textAlign='left' fontWeight='bold'>Last Name</Typography>
                                <FormControl fullWidth error>
                                    <TextField
                                        fullWidth
                                        name="lastName"
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
                        </Grid>
                        <Grid item xs={12} mb={2}>
                            <Typography textAlign='left' fontWeight='bold'>Email Address</Typography>
                            <FormControl fullWidth error>
                                <TextField
                                    fullWidth
                                    name="email"
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
                        <Grid item xs={12} mb={2}>
                            <FormControl fullWidth error>
                                <Typography textAlign='left' fontWeight='bold'>Password</Typography>
                                <TextField
                                    fullWidth
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
                        <Grid container item xs={12} mb={2}>
                            <Grid item xs={6}>
                                <Typography textAlign='left' fontWeight='bold'>Authority</Typography>
                                <FormControl fullWidth error>
                                    <Autocomplete
                                        name="role"
                                        disablePortal
                                        options={authoritiesAutocompleteData}
                                        onChange={(e, v) => handleInputSelect('role', v)}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                    <FormHelperText sx={{ height: 2 }}>{errorMessage.role}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleRegister}
                                >
                                    Create
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        </Container >
    );
}
