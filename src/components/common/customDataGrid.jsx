import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

CustomDataGrid.propTypes = {
    data: PropTypes.object.isRequired,
};

export default function CustomDataGrid({ data }) {
    const { columns, rows, getRowId } = data;
    const [paginationModel, setPaginationModel] = React.useState({ pageSize: 7, page: 0 });

    return (
        <DataGrid
            columns={columns}
            rows={rows}
            getRowId={getRowId}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            hideFooterSelectedRowCount
        />
    );
}
