import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import PeopleIcon from '@mui/icons-material/People';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
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
                    <ListItemButton onClick={() => changeItem('user/list')}>
                        <ListItemIcon>
                            <ManageAccountsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Management" />
                    </ListItemButton>
                    <ListItemButton onClick={() => changeItem('user/create')}>
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText primary="New user" />
                    </ListItemButton>
                </List>
            </Collapse>

            <ListItemButton onClick={() => changeItem('user/authority')}>
                <ListItemIcon>
                    <AssignmentIndIcon />
                </ListItemIcon>
                <ListItemText primary="Authority" />
            </ListItemButton>

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
