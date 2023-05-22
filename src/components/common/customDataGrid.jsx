import { DataGrid } from '@mui/x-data-grid';

export default function CustomDataGrid(props) {
    // eslint-disable-next-line react/prop-types
    const { data } = props;

    return (
        <DataGrid
            {...data}
            pageSizeOptions={[20]}
        />
    );
}
