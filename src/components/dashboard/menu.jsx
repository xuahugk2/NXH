import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

MainListItems.propTypes = {
    changeItem: PropTypes.func.isRequired,
};

export default function MainListItems({ changeItem }) {
    const [openAccount, setOpenAccount] = React.useState(false);

    return (
        <React.Fragment>
            <ListItemButton onClick={() => setOpenAccount((open) => !open)}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
                {openAccount ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openAccount} timeout="auto" unmountOnExit>
                <List sx={{ pl: 4 }}>
                    <ListItemButton onClick={() => changeItem('users')}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Management" />
                    </ListItemButton>
                </List>
            </Collapse>

            <Divider sx={{ my: 1 }} />

            <ListSubheader component="div" inset>
                Saved reports
            </ListSubheader>
            <ListItemButton onClick={() => changeItem('')}>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Current month" />
            </ListItemButton>
        </React.Fragment>
    );
}
