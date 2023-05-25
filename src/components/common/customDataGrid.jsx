import * as React from 'react';
import { Stack, Pagination, PaginationItem } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import {
    DataGrid,
    GridPagination,
    useGridSelector,
    useGridApiContext,
    gridPageCountSelector,
    gridPageSelector,
} from '@mui/x-data-grid';
import PropTypes from 'prop-types';

PaginationComponent.propTypes = {
    onPageChange: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
};

function PaginationComponent({ onPageChange, className }) {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    const paginationModel = useGridSelector(apiRef, gridPageSelector);

    return (
        <Pagination
            color='primary'
            className={className}
            count={pageCount}
            page={paginationModel + 1}
            onChange={(e, page) => onPageChange(e, page - 1)}
            renderItem={(item) => {
                return <PaginationItem slots={{
                    previous: () => <NavigateBefore />,
                    next: () => <NavigateNext />,
                }} {...item} />;
            }}
        />
    );
}

function CustomPagination(props) {
    return <GridPagination sx={{ margin: 'auto' }} ActionsComponent={PaginationComponent} {...props} />;
}

CustomDataGrid.propTypes = {
    data: PropTypes.object.isRequired,
};

export default function CustomDataGrid({ data }) {
    const { columns, rows, getRowId } = data;
    const [paginationModel, setPaginationModel] = React.useState({ pageSize: 10, page: 0 });

    return (
        <DataGrid
            className={classes.dataGrid}
            columns={columns}
            rows={rows}
            getRowId={getRowId}
            pagination
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            hideFooterSelectedRowCount
            slots={{
                pagination: CustomPagination,
                noRowsOverlay: () =>
                    <Stack height="100%" alignItems="center" justifyContent="center">
                        No rows in DataGrid
                    </Stack>,
            }}
        />
    );
}

const classes = {
    dataGrid: {
        '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none',
        },
        '& ..MuiDataGrid-cell:focus:focus, & ..MuiDataGrid-cell:focus:focus-within': {
            outline: 'none',
        },
    },
};
