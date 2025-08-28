import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/Home/HomeLayout';
import MainLayout from './layouts/MainLayout/MainLayout';
import { Promo08282025A, Promo08282025B, Promo08282025C, Promo08282025D, Promo08282025E } from './pages/Promos';

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
    <Routes>
      {/* Standalone pages without navigation */}
        <Route path="/promo-08282025-1" element={<Promo08282025A />} />
        <Route path="/promo-08282025-2" element={<Promo08282025B />} />
        <Route path="/promo-08282025-3" element={<Promo08282025C />} />
        <Route path="/promo-08282025-4" element={<Promo08282025D />} />
        <Route path="/promo-08282025-5" element={<Promo08282025E />} />
      {/* Main site with navigation */}
      <Route
        path="/*"
        element={
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
        }
      />
    </Routes>
  );
}

export default App;
