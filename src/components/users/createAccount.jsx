import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { MESSAGE } from '../../constants/message';
import useUsersAction from '../../actions/hooks/usersHook';
import useCodesAction from '../../actions/hooks/codesHook';
import useAuthState from '../../reducers/hook/authHook';
import useCodesState from '../../reducers/hook/codesHook';
import { CODE_CLASS } from '../../constants/codeType';

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

    const { getListCode } = useCodesAction();
    const { codes } = useCodesState();

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

    const handleInputSelect = (e) => {
        const { name, value } = e.target;
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

        const selectedAuthority = codes
            .find(code => code.codeClass === CODE_CLASS.AUTHORITY && code.codeValue === registerInfo.role);
        if (!selectedAuthority) {
            cloneErrorMessage = {
                ...cloneErrorMessage,
                role: MESSAGE.REQUIRED,
            };
        }

        setErrorMessage(cloneErrorMessage);

        return cloneErrorMessage.email || cloneErrorMessage.password || cloneErrorMessage.firstName || cloneErrorMessage.lastName;
    };

    const codesAutocompleteData = React.useMemo(() => {
        return codes
            .filter((code) => code.codeClass === CODE_CLASS.AUTHORITY);
    }, [codes]);

    const handleRegister = async () => {
        if (checkError()) {
            return;
        }
        createUser({
            ...registerInfo,
            role: registerInfo.role,
        }, authInfo._id);
    };

    React.useEffect(() => {
        getListCode(authInfo._id);
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
                                    <Select
                                        fullWidth
                                        name='role'
                                        onChange={handleInputSelect}
                                        error={!!errorMessage.role}
                                    >
                                        {codesAutocompleteData.map(role => {
                                            return <MenuItem key={role.codeValue} value={role.codeValue}>{role.codeName}</MenuItem>;
                                        })}
                                    </Select>
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
