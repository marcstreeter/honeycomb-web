import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import type React from 'react';
import ChevronIcon from '../../assets/icons/ChevronIcon';
import IconWrench from '../../assets/icons/icon-wrench.svg';
import Logo from '../../assets/icons/logo.svg';
import PhoneIcon from '../../assets/icons/PhoneIcon';
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
}) => (
  <nav className={`${styles['main-nav-refined']}`}>
    <div className={`${styles.container} ${styles['nav-container']}`}>
      <div className={`${styles['nav-logo']}`}>
        <img src={Logo} alt="Honeycomb Logo" className={`${styles['logo-svg']}`} height={80} />
      </div>
      <div className={`${styles['nav-links-centered']}`}>
        <Button
          className={`${styles['nav-dropdown-btn']}`}
          onClick={(e) => handleMenuOpen(e, setAcAnchor)}
          endIcon={<ChevronIcon className={`${styles['chevron-icon']}`} />}
        >
          Air Conditioning
        </Button>
        <Menu
          anchorEl={acAnchor}
          open={Boolean(acAnchor)}
          onClose={() => handleMenuClose(setAcAnchor)}
          className={`${styles['nav-dropdown-menu']}`}
        >
          <MenuItem onClick={() => handleMenuClose(setAcAnchor)}>
            <ListItemIcon>
              <img src={IconWrench} alt="" className={`${styles['menu-icon']}`} />
            </ListItemIcon>
            <ListItemText>AC Installation</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClose(setAcAnchor)}>
            <ListItemIcon>
              <img src={IconWrench} alt="" className={`${styles['menu-icon']}`} />
            </ListItemIcon>
            <ListItemText>AC Repair</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClose(setAcAnchor)}>
            <ListItemIcon>
              <img src={IconWrench} alt="" className={`${styles['menu-icon']}`} />
            </ListItemIcon>
            <ListItemText>AC Maintenance</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClose(setAcAnchor)}>
            <ListItemIcon>
              <img src={IconWrench} alt="" className={`${styles['menu-icon']}`} />
            </ListItemIcon>
            <ListItemText>Emergency AC Service</ListItemText>
          </MenuItem>
        </Menu>

        <Button
          className="nav-dropdown-btn"
          onClick={(e) => handleMenuOpen(e, setHeatingAnchor)}
          endIcon={<ChevronIcon className="chevron-icon" />}
        >
          Heating
        </Button>
        <Menu
          anchorEl={heatingAnchor}
          open={Boolean(heatingAnchor)}
          onClose={() => handleMenuClose(setHeatingAnchor)}
          className={`${styles['nav-dropdown-menu']}`}
        >
          <MenuItem onClick={() => handleMenuClose(setHeatingAnchor)}>
            <ListItemIcon>
              <img src={IconWrench} alt="" className={`${styles['menu-icon']}`} />
            </ListItemIcon>
            <ListItemText>Furnace Installation</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClose(setHeatingAnchor)}>
            <ListItemIcon>
              <img src={IconWrench} alt="" className={`${styles['menu-icon']}`} />
            </ListItemIcon>
            <ListItemText>Furnace Repair</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClose(setHeatingAnchor)}>
            <ListItemIcon>
              <img src={IconWrench} alt="" className={`${styles['menu-icon']}`} />
            </ListItemIcon>
            <ListItemText>Heat Pump Services</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClose(setHeatingAnchor)}>
            <ListItemIcon>
              <img src={IconWrench} alt="" className={`${styles['menu-icon']}`} />
            </ListItemIcon>
            <ListItemText>Emergency Heating</ListItemText>
          </MenuItem>
        </Menu>

        <Button
          className="nav-dropdown-btn"
          onClick={(e) => handleMenuOpen(e, setIaqAnchor)}
          endIcon={<ChevronIcon className={`${styles['chevron-icon']}`} />}
        >
          Indoor Air Quality
        </Button>
        <Menu
          anchorEl={iaqAnchor}
          open={Boolean(iaqAnchor)}
          onClose={() => handleMenuClose(setIaqAnchor)}
          className={`${styles['nav-dropdown-menu']}`}
        >
          <MenuItem onClick={() => handleMenuClose(setIaqAnchor)}>
            <ListItemIcon>
              <img src={IconWrench} alt="" className={`${styles['menu-icon']}`} />
            </ListItemIcon>
            <ListItemText>Air Purifiers</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClose(setIaqAnchor)}>
            <ListItemIcon>
              <img src={IconWrench} alt="" className={`${styles['menu-icon']}`} />
            </ListItemIcon>
            <ListItemText>Humidifiers</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClose(setIaqAnchor)}>
            <ListItemIcon>
              <img src={IconWrench} alt="" className={`${styles['menu-icon']}`} />
            </ListItemIcon>
            <ListItemText>Dehumidifiers</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuClose(setIaqAnchor)}>
            <ListItemIcon>
              <img src={IconWrench} alt="" className={`${styles['menu-icon']}`} />
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
          icon={<PhoneIcon />}
          href="tel:210-404-3209"
          className={`${styles['phone-btn-refined']}`}
        >
          (210) 404-3209
        </Button>
      </div>
    </div>
  </nav>
);

export default Nav;
