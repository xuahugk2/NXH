import * as React from 'react';
import moment from 'moment/moment';
import useUsersAction from '../../actions/hooks/usersHook';
import useCodesAction from '../../actions/hooks/codesHook';
import useUsersState from '../../reducers/hook/usersHook';
import useAuthState from '../../reducers/hook/authHook';
import useCodesState from '../../reducers/hook/codesHook';
import CustomDataGrid from '../common/customDataGrid';
import UpdateAccountDialog from './updateAccountDialog';
import { Button } from '@mui/material';
import {
    Delete as DeleteIcon,
    EditNote as EditNoteIcon,
} from '@mui/icons-material';
import { CODE_CLASS } from '../../constants/codeType';

export default function Users() {
    const [open, setOpen] = React.useState(false);
    const [selectedAccount, setSelectedAccount] = React.useState('');

    const { getListUser, deleteUser } = useUsersAction();

    const { authInfo } = useAuthState();
    const { users } = useUsersState();

    const { getListCode } = useCodesAction();
    const { codes } = useCodesState();

    React.useEffect(() => {
        handleFetchUserDataList();
        handleFetchCodes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const data = React.useMemo(() => {
        return {
            columns: [
                {
                    field: 'email',
                    headerName: 'Email',
                    flex: 1,
                    disableColumnMenu: true,
                    headerAlign: 'center',
                    align: 'center',
                },
                {
                    field: 'fullName',
                    headerName: 'Full Name',
                    flex: 1,
                    disableColumnMenu: true,
                    headerAlign: 'center',
                    align: 'center',
                    valueGetter: (params) =>
                        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
                },
                {
                    field: 'role',
                    headerName: 'Authority',
                    flex: 1,
                    disableColumnMenu: true,
                    headerAlign: 'center',
                    align: 'center',
                    valueFormatter: (params) => {
                        if (params.value == null) {
                            return '';
                        }
                        return getAuthorityNameById(params.value);
                    },
                },
                {
                    field: 'createdAt',
                    headerName: 'Create At',
                    flex: 1,
                    disableColumnMenu: true,
                    headerAlign: 'center',
                    align: 'center',
                    valueFormatter: (params) => {
                        if (params.value == null) {
                            return '';
                        }
                        return moment(params.value).format('YYYY/MM/DD HH:MM:SS');
                    },
                },
                {
                    field: 'updatedAt',
                    headerName: 'Update At',
                    flex: 1,
                    disableColumnMenu: true,
                    headerAlign: 'center',
                    align: 'center',
                    valueFormatter: (params) => {
                        if (params.value == null) {
                            return '';
                        }
                        return moment(params.value).format('YYYY/MM/DD HH:MM:SS');
                    },
                },
                {
                    field: 'action',
                    headerName: '',
                    flex: 1,
                    disableColumnMenu: true,
                    headerAlign: 'center',
                    align: 'center',
                    sortable: false,
                    renderCell: (params) => renderActionButtons(params.row),
                },
            ],
            rows: users,
            getRowId: (row) => row?._id,
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users]);

    const getAuthorityNameById = (id) => {
        return codes.filter(code => code.codeClass === CODE_CLASS.AUTHORITY).find(a => a.codeValue === id)?.codeName || '';
    };

    const renderActionButtons = (row) => {
        return (
            <React.Fragment>
                <Button onClick={() => handleUpdateAccount(row._id)}>
                    <EditNoteIcon color='success' />
                </Button>
                <Button onClick={() => handleDeleteAccount(row._id)}>
                    <DeleteIcon color='error' />
                </Button>
            </React.Fragment>
        );
    };

    const handleDeleteAccount = (id) => {
        deleteUser(id, authInfo._id, handleFetchUserDataList);
    };

    const handleUpdateAccount = (id) => {
        const user = users.find((value) => value._id === id);
        setSelectedAccount(user);
        setOpen(true);
    };

    const handleUpdateSuccess = () => {
        handleFetchUserDataList();
    };

    const handleFetchUserDataList = () => {
        getListUser(authInfo._id);
    };

    const handleFetchCodes = () => {
        getListCode(authInfo._id);
    };

    return (
        <React.Fragment>
            <CustomDataGrid
                data={data}
            />
            <UpdateAccountDialog open={open} setOpen={setOpen} accountData={selectedAccount} handleSuccess={handleUpdateSuccess} />
        </React.Fragment>
    );
}
