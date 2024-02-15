import * as React from 'react';
import { Link } from 'react-router-dom';
import { List, Box, ListItem, ListItemIcon, ListItemText, Divider, Drawer } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

function ListItemLink(props) {
    const { icon, primary, to } = props;

    return (
        <li>
            <ListItem button component={Link} to={to}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}

export default function Navigation() {
    return (
        <Drawer
            variant="permanent"
            anchor="left">
            <Box sx={{ padding: 1 }}>
                <List aria-label="main folders">
                    <ListItemLink to="/profile" primary="Profil" icon={<AccountBoxIcon />} />
                </List>
                <Divider />
                <List aria-label="secondary folders">
                    <ListItemLink to="/home" primary="Accueil" icon={<HomeIcon />} />
                    <ListItemLink to="/dashboard" primary="Statistiques" icon={<DashboardIcon />} />
                </List>
                <Divider />
                <List aria-label="other folders">
                    <ListItemLink to="/calendar" primary="Calendrier" icon={<DateRangeIcon />} />
                    <ListItemLink to="/travels" primary="Liste des voyages"
                        icon={<FlightTakeoffIcon />} />
                </List>
            </Box>
        </Drawer>
    );
}
