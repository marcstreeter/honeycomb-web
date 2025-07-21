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
}) => (
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
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
