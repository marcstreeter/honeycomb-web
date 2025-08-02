import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Nav from './Nav';

const NavWrapper = () => {
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
  );
};

const meta: Meta<typeof Nav> = {
  title: 'Layout/Nav',
  component: NavWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavWrapper>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};
