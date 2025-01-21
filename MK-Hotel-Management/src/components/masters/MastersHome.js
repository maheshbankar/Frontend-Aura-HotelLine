import React, { useState } from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid, Paper, IconButton, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import TuneIcon from '@mui/icons-material/Tune';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChairIcon from '@mui/icons-material/Chair';
import TableChartIcon from '@mui/icons-material/TableChart';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import { useTranslation } from 'react-i18next';
import styles from '../../styles.module.css';

// This component will render the menu list and handle grid/list view toggle
const MastersHome = () => {
    const { t } = useTranslation();
    const [viewMode, setViewMode] = useState('list');  // 'list' or 'grid'

    const handleToggleView = () => {
        setViewMode(viewMode === 'list' ? 'grid' : 'list');
    };

    // Menu items
    const menuItems = [
        { to: '/item-category', text: t('menu.item_categories'), icon: <CategoryIcon /> },
        { to: '/item-type', text: t('menu.item_types'), icon: <TuneIcon /> },
        { to: '/items', text: t('menu.items'), icon: <InventoryIcon /> },
        { to: '/employee', text: t('menu.employees'), icon: <PeopleIcon /> },
        { to: '/employee-type', text: t('menu.employee_types'), icon: <SupervisorAccountIcon /> },
        { to: '/seating-type', text: t('menu.seating_types'), icon: <ChairIcon /> },
        { to: '/table', text: t('menu.tables'), icon: <TableChartIcon /> },
      ];

    return (
        <Paper className={styles.list_container} sx={{ padding: 2 }}>
            {/* Button to toggle between List and Grid view with icons */}
            <IconButton onClick={handleToggleView} sx={{ marginBottom: 2 }}>
                {viewMode === 'list' ? <GridViewIcon /> : <ListIcon />}
            </IconButton>
            {/* <Typography variant="h6">{t('login')}</Typography> */}
            {/* List/Grid View */}
            {viewMode === 'list' ? (
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ '&:hover': { backgroundColor: '#f0f0f0' } }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <NavLink to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ListItemText primary={item.text} />
                                </NavLink>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Grid container spacing={2}>
                    {menuItems.map((item, index) => (
                        <Grid item xs={12} sm={5} md={3} key={index}>
                            <Paper 
                                sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'flex-start', 
                                    padding: 2, 
                                    '&:hover': { backgroundColor: '#e0e0e0' },
                                    transition: 'background-color 0.3s',
                                    cursor: 'pointer',
                                }}>
                                {item.icon}
                                <NavLink to={item.to} style={{ textDecoration: 'none', color: 'inherit', marginLeft: 16 }}>
                                    <Typography variant="h6">{item.text}</Typography>
                                </NavLink>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Paper>
    );
};

export default MastersHome;
