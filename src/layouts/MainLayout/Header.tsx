import { AppBar } from '@mui/material';
import type React from 'react';
import Nav from './Nav';
import TopBar from './TopBar';

interface HeaderProps {
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

const Header: React.FC<HeaderProps> = ({
  acAnchor,
  setAcAnchor,
  heatingAnchor,
  setHeatingAnchor,
  iaqAnchor,
  setIaqAnchor,
  handleMenuOpen,
  handleMenuClose,
}) => (
  <AppBar
    position="fixed"
    sx={{
      backgroundColor: 'var(--color-black)',
      boxShadow: 'none',
      padding: '10px 20px 0 20px',
    }}
  >
    <TopBar />
    <Nav
      acAnchor={acAnchor}
      setAcAnchor={setAcAnchor}
      heatingAnchor={heatingAnchor}
      setHeatingAnchor={setHeatingAnchor}
      iaqAnchor={iaqAnchor}
      setIaqAnchor={setIaqAnchor}
      handleMenuOpen={handleMenuOpen}
      handleMenuClose={handleMenuClose}
    />
  </AppBar>
);

export default Header;
