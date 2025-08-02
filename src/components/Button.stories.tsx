import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../assets/icons/Icon';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bgColor: { control: 'color' },
    textColor: { control: 'color' },
    bgColorHover: { control: 'color' },
    iconColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Call Now',
    icon: <Icon iconKey="phone" />,
    bgColor: 'var(--color-red)',
  },
};

export const WithEndIcon: Story = {
  args: {
    children: 'Schedule Service',
    endIcon: <Icon iconKey="calendar" />,
    bgColor: 'var(--color-blue)',
  },
};

export const CustomColors: Story = {
  args: {
    children: 'Custom Button',
    bgColor: '#2196f3',
    textColor: '#fff',
    bgColorHover: '#1976d2',
  },
};

export const AsLink: Story = {
  args: {
    children: 'Visit Website',
    href: 'https://example.com',
    bgColor: 'var(--color-yellow)',
    textColor: 'var(--color-black)',
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Service Areas',
    icon: <Icon iconKey="gps-marker" />,
    endIcon: <Icon iconKey="chevron-right" />,
    bgColor: 'var(--color-red)',
  },
};
