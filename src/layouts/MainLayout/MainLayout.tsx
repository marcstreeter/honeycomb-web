import { Toolbar, useMediaQuery, useTheme } from '@mui/material';
import type React from 'react';
import Footer from './Footer';
import Header from './Header';

interface MainLayoutProps {
  children: React.ReactNode;
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

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  acAnchor,
  setAcAnchor,
  heatingAnchor,
  setHeatingAnchor,
  iaqAnchor,
  setIaqAnchor,
  handleMenuOpen,
  handleMenuClose,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallMobile = useMediaQuery('(max-width:480px)');

  // Calculate header height based on screen size
  // TopBar: ~38px, Nav: varies by screen size, Header padding: 10px top
  const headerHeight = isSmallMobile
    ? '105px' // TopBar hidden + Nav (60px) + padding (15px + 15px + 10px + 5px)
    : isMobile
      ? '133px' // TopBar (38px) + Nav (60px) + padding (15px + 15px + 10px + 5px)
      : '168px'; // TopBar (38px) + Nav (80px) + padding (20px + 20px + 10px)

  return (
    <>
      <Header
        acAnchor={acAnchor}
        setAcAnchor={setAcAnchor}
        heatingAnchor={heatingAnchor}
        setHeatingAnchor={setHeatingAnchor}
        iaqAnchor={iaqAnchor}
        setIaqAnchor={setIaqAnchor}
        handleMenuOpen={handleMenuOpen}
        handleMenuClose={handleMenuClose}
      />
      <Toolbar sx={{ minHeight: `${headerHeight} !important` }} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
