import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import type React from 'react';
import { useState } from 'react';
import Icon from '../../assets/icons/Icon';
import Logo from '../../assets/icons/logo.svg';
import Button from '../../components/Button';
import styles from './Nav.module.css';

interface NavProps {
  acAnchor: null | HTMLElement;
  setAcAnchor: (anchor: HTMLElement | null) => void;
  heatingAnchor: null | HTMLElement;
  setHeatingAnchor: (anchor: HTMLElement | null) => void;
  iaqAnchor: null | HTMLElement;
  setIaqAnchor: (anchor: HTMLElement | null) => void;
  handleMenuOpen: (
    event: React.MouseEvent<HTMLElement>,
    setAnchor: (anchor: HTMLElement | null) => void
  ) => void;
  handleMenuClose: (setAnchor: (anchor: null) => void) => void;
  isScrolled: boolean;
}

const Nav: React.FC<NavProps> = ({
  acAnchor,
  setAcAnchor,
  heatingAnchor,
  setHeatingAnchor,
  iaqAnchor,
  setIaqAnchor,
  handleMenuOpen,
  handleMenuClose,
  isScrolled,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [acOpen, setAcOpen] = useState(false);
  const [heatingOpen, setHeatingOpen] = useState(false);
  const [iaqOpen, setIaqOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
    setAcOpen(false);
    setHeatingOpen(false);
    setIaqOpen(false);
  };

  const handleMenuHoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    setAnchor: (anchor: HTMLElement | null) => void
  ) => {
    if (!isMobile) {
      // Close all other menus first
      setAcAnchor(null);
      setHeatingAnchor(null);
      setIaqAnchor(null);
      // Then open the current one
      setAnchor(event.currentTarget);
    }
  };

  const drawer = (
    <div className={styles['mobile-drawer']}>
      <div className={styles['drawer-header']}>
        <img src={Logo} alt="Honeycomb Logo" className={styles['drawer-logo']} />
        <IconButton onClick={handleDrawerClose} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setAcOpen(!acOpen)} className={styles['drawer-item']}>
            <ListItemText primary="Air Conditioning" />
            {acOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={acOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} className={styles['drawer-subitem']}>
              <ListItemText primary="AC Installation" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className={styles['drawer-subitem']}>
              <ListItemText primary="AC Repair" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className={styles['drawer-subitem']}>
              <ListItemText primary="AC Maintenance" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className={styles['drawer-subitem']}>
              <ListItemText primary="Emergency AC Service" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setHeatingOpen(!heatingOpen)}
            className={styles['drawer-item']}
          >
            <ListItemText primary="Heating" />
            {heatingOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={heatingOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} className={styles['drawer-subitem']}>
              <ListItemIcon>
                <Icon iconKey="wrench" className={styles['menu-icon']} fill="var(--color-yellow)" />
              </ListItemIcon>
              <ListItemText primary="Furnace Installation" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className={styles['drawer-subitem']}>
              <ListItemText primary="Furnace Repair" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className={styles['drawer-subitem']}>
              <ListItemText primary="Heat Pump Services" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className={styles['drawer-subitem']}>
              <ListItemText primary="Emergency Heating" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton onClick={() => setIaqOpen(!iaqOpen)} className={styles['drawer-item']}>
            <ListItemText primary="Indoor Air Quality" />
            {iaqOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={iaqOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} className={styles['drawer-subitem']}>
              <ListItemText primary="Air Purifiers" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className={styles['drawer-subitem']}>
              <ListItemText primary="Humidifiers" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className={styles['drawer-subitem']}>
              <ListItemText primary="Dehumidifiers" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className={styles['drawer-subitem']}>
              <ListItemText primary="Air Duct Cleaning" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="#areas"
            className={styles['drawer-item']}
            onClick={handleDrawerClose}
          >
            <ListItemText primary="Service Areas" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="#refer"
            className={styles['drawer-item']}
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <Icon iconKey="thumbs-up" className={styles['menu-icon']} fill="#ffd700" />
            </ListItemIcon>
            <ListItemText primary="Refer a Friend" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="#membership"
            className={styles['drawer-item']}
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <Icon iconKey="tool-box" className={styles['menu-icon']} fill="#ffd700" />
            </ListItemIcon>
            <ListItemText primary="Membership Plans" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="#schedule"
            className={styles['drawer-item']}
            onClick={handleDrawerClose}
          >
            <ListItemIcon>
              <Icon iconKey="calendar" className={styles['menu-icon']} fill="#ffd700" />
            </ListItemIcon>
            <ListItemText primary="Schedule Online" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="tel:210-404-3209"
            className={styles['drawer-highlight']}
          >
            <ListItemIcon>
              <Icon iconKey="phone" className={styles['menu-icon']} fill="#ffd700" />
            </ListItemIcon>
            <ListItemText primary="(210) 404-3209" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <nav className={`${styles['main-nav-refined']} ${isScrolled ? styles['nav-scrolled'] : ''}`}>
      <div className={`${styles.container} ${styles['nav-container']}`}>
        <div className={`${styles['nav-logo']}`}>
          <div className={styles['logo-container']}>
            <img
              src={Logo}
              alt="Honeycomb Logo"
              className={`${styles['logo-svg']} ${styles['logo-large']}`}
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <div className={`${styles['nav-links-centered']}`}>
              <Button
                className={`${styles['nav-dropdown-btn']}`}
                onClick={(e) => handleMenuOpen(e, setAcAnchor)}
                onMouseEnter={(e) => handleMenuHoverOpen(e, setAcAnchor)}
                endIcon={<Icon iconKey="chevron-down" className={`${styles['chevron-icon']}`} />}
                aria-owns={acAnchor ? 'ac-menu' : undefined}
                aria-haspopup="true"
              >
                Air Conditioning
              </Button>
              <Menu
                id="ac-menu"
                anchorEl={acAnchor}
                open={Boolean(acAnchor)}
                onClose={() => handleMenuClose(setAcAnchor)}
                className={`${styles['nav-dropdown-menu']}`}
                disableScrollLock={true}
                MenuListProps={{
                  onMouseLeave: () => handleMenuClose(setAcAnchor),
                }}
              >
                <MenuItem onClick={() => handleMenuClose(setAcAnchor)}>
                  <ListItemText>AC Installation</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(setAcAnchor)}>
                  <ListItemText>AC Repair</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(setAcAnchor)}>
                  <ListItemText>AC Maintenance</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(setAcAnchor)}>
                  <ListItemText>Emergency AC Service</ListItemText>
                </MenuItem>
              </Menu>

              <Button
                className={`${styles['nav-dropdown-btn']}`}
                onClick={(e) => handleMenuOpen(e, setHeatingAnchor)}
                onMouseEnter={(e) => handleMenuHoverOpen(e, setHeatingAnchor)}
                endIcon={<Icon iconKey="chevron-down" className={`${styles['chevron-icon']}`} />}
                aria-owns={heatingAnchor ? 'heating-menu' : undefined}
                aria-haspopup="true"
              >
                Heating
              </Button>
              <Menu
                id="heating-menu"
                anchorEl={heatingAnchor}
                open={Boolean(heatingAnchor)}
                onClose={() => handleMenuClose(setHeatingAnchor)}
                className={`${styles['nav-dropdown-menu']}`}
                disableScrollLock={true}
                MenuListProps={{
                  onMouseLeave: () => handleMenuClose(setHeatingAnchor),
                }}
              >
                <MenuItem onClick={() => handleMenuClose(setHeatingAnchor)}>
                  <ListItemText>Furnace Installation</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(setHeatingAnchor)}>
                  <ListItemText>Furnace Repair</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(setHeatingAnchor)}>
                  <ListItemText>Heat Pump Services</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(setHeatingAnchor)}>
                  <ListItemText>Emergency Heating</ListItemText>
                </MenuItem>
              </Menu>

              <Button
                className={`${styles['nav-dropdown-btn']}`}
                onClick={(e) => handleMenuOpen(e, setIaqAnchor)}
                onMouseEnter={(e) => handleMenuHoverOpen(e, setIaqAnchor)}
                endIcon={<Icon iconKey="chevron-down" className={`${styles['chevron-icon']}`} />}
                aria-owns={iaqAnchor ? 'iaq-menu' : undefined}
                aria-haspopup="true"
              >
                Indoor Air Quality
              </Button>
              <Menu
                id="iaq-menu"
                anchorEl={iaqAnchor}
                open={Boolean(iaqAnchor)}
                onClose={() => handleMenuClose(setIaqAnchor)}
                className={`${styles['nav-dropdown-menu']}`}
                disableScrollLock={true}
                MenuListProps={{
                  onMouseLeave: () => handleMenuClose(setIaqAnchor),
                }}
              >
                <MenuItem onClick={() => handleMenuClose(setIaqAnchor)}>
                  <ListItemText>Air Purifiers</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(setIaqAnchor)}>
                  <ListItemText>Humidifiers</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(setIaqAnchor)}>
                  <ListItemText>Dehumidifiers</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(setIaqAnchor)}>
                  <ListItemIcon>
                    <Icon iconKey="wrench" className={`${styles['menu-icon']}`} />
                  </ListItemIcon>
                  <ListItemText>Air Duct Cleaning</ListItemText>
                </MenuItem>
              </Menu>

              <a href="#areas" className={`${styles['nav-link-simple']}`}>
                Service Areas
              </a>
            </div>
            <div className={`${styles['nav-actions-refined']}`}>
              <Button
                icon={<Icon iconKey="phone" fill="currentColor" />}
                bgColor="var(--color-red)"
                href="tel:210-404-3209"
                className={`${styles['phone-btn-refined']}`}
              >
                (210) 404-3209
              </Button>
            </div>
          </>
        )}

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={styles['hamburger-btn']}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            zIndex: (theme) => theme.zIndex.appBar + 1,
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
              backgroundColor: '#000',
              color: '#fff',
            },
          }}
        >
          {drawer}
        </Drawer>
      </div>
    </nav>
  );
};

export default Nav;
