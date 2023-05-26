import * as React from 'react';
import moment from 'moment/moment';
import useUsersAction from '../../actions/hooks/usersHook';
import useUsersState from '../../reducers/hook/usersHook';
import useAuthState from '../../reducers/hook/authHook';
import Title from '../common/title';
import CustomDataGrid from '../common/customDataGrid';
import { Button } from '@mui/material';
import {
    Delete as DeleteIcon,
} from '@mui/icons-material';

export default function Users() {
    const { getListUser, deleteUser } = useUsersAction();

    const { authInfo } = useAuthState();
    const { users } = useUsersState();

    React.useEffect(() => {
        getListUser({ _id: authInfo._id });
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
                },
                {
                    field: 'fullName',
                    headerName: 'Full Name',
                    flex: 1,
                    disableColumnMenu: true,
                    valueGetter: (params) =>
                        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
                },
                {
                    field: 'role',
                    headerName: 'Authority',
                    flex: 1,
                    disableColumnMenu: true,
                    valueFormatter: (params) => {
                        if (params.value == null) {
                            return '';
                        }
                        return params.value === 1 ? 'Admin' : 'User';
                    },
                },
                {
                    field: 'createdAt',
                    headerName: 'Create At',
                    flex: 1,
                    disableColumnMenu: true,
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
                    valueFormatter: (params) => {
                        if (params.value == null) {
                            return '';
                        }
                        return moment(params.value).format('YYYY/MM/DD HH:MM:SS');
                    },
                },
                {
                    field: 'action',
                    headerName: 'Action',
                    flex: 0.5,
                    disableColumnMenu: true,
                    sortable: false,
                    renderCell: (params) => renderActionButtons(params.row),
                },
            ],
            rows: users,
            getRowId: (row) => row?._id,
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users]);

    const renderActionButtons = (row) => {
        return (
            <Button onClick={() => handleDeleteAccount(row._id)}>
                <DeleteIcon color='error' />
            </Button>
        );
    };

    const handleDeleteAccount = (id) => {
        deleteUser(id);
    };

    return (
        <React.Fragment>
            <Title>List of Users</Title>
            <CustomDataGrid
                data={data}
            />
        </React.Fragment>
    );
}
