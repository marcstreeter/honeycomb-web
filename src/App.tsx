import './App.css';
import { useState } from 'react';
import HomeLayout from './layouts/Home/HomeLayout';
import MainLayout from './layouts/MainLayout/MainLayout';

function App() {
  const [acAnchor, setAcAnchor] = useState<null | HTMLElement>(null);
  const [heatingAnchor, setHeatingAnchor] = useState<null | HTMLElement>(null);
  const [iaqAnchor, setIaqAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    setAnchor: (anchor: HTMLElement | null) => void
  ) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = (setAnchor: (anchor: null) => void) => {
    setAnchor(null);
  };

  return (
    <MainLayout
      acAnchor={acAnchor}
      setAcAnchor={setAcAnchor}
      heatingAnchor={heatingAnchor}
      setHeatingAnchor={setHeatingAnchor}
      iaqAnchor={iaqAnchor}
      setIaqAnchor={setIaqAnchor}
      handleMenuOpen={handleMenuOpen}
      handleMenuClose={handleMenuClose}
    >
      <HomeLayout />
    </MainLayout>
  );
}

export default App;
