import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Title({ children }) {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {children}
        </Typography>
    );
}

Title.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Title;
