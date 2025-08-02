import type { Meta, StoryObj } from '@storybook/react';
import CalendarIcon from '../assets/icons/CalendarIcon';
import Icon from '../assets/icons/Icon';
import PhoneIcon from '../assets/icons/PhoneIcon';
import ToolBoxIcon from '../assets/icons/ToolBoxIcon';
import HoneyIcon from './HoneyIcon';

const meta: Meta<typeof HoneyIcon> = {
  title: 'Components/HoneyIcon',
  component: HoneyIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoneyIcon>;

export const Default: Story = {
  args: {},
};

export const WithCalendarIcon: Story = {
  args: {
    icon: <CalendarIcon style={{ color: 'white', width: 22, height: 22 }} />,
  },
};

export const WithPhoneIcon: Story = {
  args: {
    icon: <PhoneIcon style={{ color: 'white', width: 22, height: 22 }} />,
  },
};

export const WithToolBoxIcon: Story = {
  args: {
    icon: <ToolBoxIcon style={{ color: 'white', width: 22, height: 22 }} />,
  },
};

export const WithGenericIcon: Story = {
  args: {
    icon: <Icon iconKey="wrench" style={{ color: 'white', width: 22, height: 22 }} />,
  },
};

export const WithStarIcon: Story = {
  args: {
    icon: <Icon iconKey="star" style={{ color: 'white', width: 22, height: 22 }} />,
  },
};
