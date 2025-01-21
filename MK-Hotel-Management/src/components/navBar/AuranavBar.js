import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useTheme } from '../theme/ThemeContext';
import AuraDashboard from '../dashboard/AuraDashboard';
import ItemCategoryList from '../masters/itemCategory/ItemCategoryList';
import ItemList from '../masters/itemRegistration/ItemList';
import EmployeeMasterList from '../masters/employeeRegistration/EmployeeMasterList';
import Switch from '@mui/material/Switch';  // For dark mode toggle
import Collapse from '@mui/material/Collapse'; // Import Collapse for the collapsible menu
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Icon for expanding
import LanguageIcon from '@mui/icons-material/Language';
import ItemTypeList from '../masters/itemType/ItemTypeList';
import EmployeeTypeList from '../masters/employeeType/EmployeeTypeList';
import SatingTypeList from '../masters/seattingArangement/seatingType/SatingTypeList';
import TableList from '../masters/seattingArangement/tables/TableList';
import Order from '../order/Order';
import MastersHome from '../masters/MastersHome';
import { Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../i18n';
// import EmployeeTypeList from '../masters/employeeType/EmployeeTypeList';

const drawerWidth = 240;

function AuranavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [mastersOpen, setMastersOpen] = React.useState(true); // State to control Masters collapse

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMastersToggle = () => {
    setMastersOpen(!mastersOpen); // Toggle the collapse state for Masters menu
  };
// -----------------------------------

const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change language using i18next
    setAnchorEl(null); // Close the menu
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary={t('dashboard')} />
            </NavLink>
          </ListItemButton>
        </ListItem>

        {/* Masters section with collapsible functionality */}
        <ListItem disablePadding>
          <ListItemButton onClick={handleMastersToggle}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={t('masters')} />
            <IconButton size="small">
              <ExpandMoreIcon />
            </IconButton>
          </ListItemButton>
        </ListItem>

        <Collapse in={mastersOpen} timeout="auto" unmountOnExit>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <NavLink to="/item-category" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemText primary= {t('menu.item_categories')} />
                </NavLink>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <NavLink to="/item-type" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemText primary={t('menu.item_types')} />
                </NavLink>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <NavLink to="/items" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemText primary={t('menu.items')} />
                </NavLink>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <NavLink to="/employee" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemText primary={t('menu.employees')} />
                </NavLink>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <NavLink to="/employee-type" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemText primary={t('menu.employee_types')} />
                </NavLink>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <NavLink to="/seating-type" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemText primary={t('menu.seating_types')} />
                </NavLink>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <NavLink to="/table" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemText primary={t('menu.tables')} />
                </NavLink>
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <NavLink to="/order" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary="Order" />
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px}` },
          backgroundColor: isDarkMode ? '#333' : '#1976d2',
          color: isDarkMode ? '#fff' : '#000',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            MK - Hotel Management
          </Typography>
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            name="darkModeToggle"
            color="default"
            aria-label="Toggle Dark Mode"
          />
            <IconButton onClick={handleLanguageMenuOpen} color="inherit">
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleLanguageMenuClose}
            MenuListProps={{
              'aria-labelledby': 'language-menu-button',
            }}
          >
            <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
            <MenuItem onClick={() => handleLanguageChange('mr')}>मराठी</MenuItem>
            <MenuItem onClick={() => handleLanguageChange('hi')}>हिन्दी</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: isDarkMode ? '#333' : '#fff',
              color: isDarkMode ? '#fff' : '#000',
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: isDarkMode ? '#333' : '#fff',
              color: isDarkMode ? '#fff' : '#000',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Routes>
          <Route path="/dashboard" element={<AuraDashboard />} />
          <Route path="/item-category" element={<ItemCategoryList />} />
          <Route path="/item-type" element={<ItemTypeList />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/employee" element={<EmployeeMasterList />} />
          <Route path="/employee-type" element={<EmployeeTypeList />} />
          <Route path="/seating-type" element={<SatingTypeList />} />
          <Route path="/table" element={<TableList />} />
          <Route path="/order" element={<Order />} />
          <Route path="/masters" element={<MastersHome />} />
        </Routes>
      </Box>
    </Box>
  );
}

AuranavBar.propTypes = {
  window: PropTypes.func,
};

export default AuranavBar;
