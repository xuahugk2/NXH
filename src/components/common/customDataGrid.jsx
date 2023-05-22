import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

CustomDataGrid.propTypes = {
    data: PropTypes.object.isRequired,
};

export default function CustomDataGrid({ data }) {
    const { columns, rows, getRowId } = data;

    return (
        <DataGrid
            columns={columns}
            rows={rows}
            getRowId={getRowId}
            loading={rows.length === 0}
            paginationModel={{ pageSize: 20, page: 0 }}
            hideFooterSelectedRowCount
        />
    );
}
