import { AppBar } from '@mui/material';
import type React from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
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
}) => {
  const isScrolled = useScrollPosition(50);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.85)' : 'var(--color-black)',
        boxShadow: 'none',
        padding: isScrolled ? '0 20px' : '10px 20px 0 20px',
        transition: 'padding 0.3s ease-in-out, background-color 0.3s ease-in-out',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      {!isScrolled && <TopBar />}
      <Nav
        acAnchor={acAnchor}
        setAcAnchor={setAcAnchor}
        heatingAnchor={heatingAnchor}
        setHeatingAnchor={setHeatingAnchor}
        iaqAnchor={iaqAnchor}
        setIaqAnchor={setIaqAnchor}
        handleMenuOpen={handleMenuOpen}
        handleMenuClose={handleMenuClose}
        isScrolled={isScrolled}
      />
    </AppBar>
  );
};

export default Header;
