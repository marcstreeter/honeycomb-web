import type { Meta, StoryObj } from '@storybook/react';
import { ExampleComponent } from './ExampleComponent';

const meta: Meta<typeof ExampleComponent> = {
  title: 'Example/ExampleComponent',
  component: ExampleComponent,
};
export default meta;

type Story = StoryObj<typeof ExampleComponent>;

export const Primary: Story = {
  args: {
    title: 'Primary Example',
    description: 'This is the primary example of the ExampleComponent.',
    variant: 'primary',
    showIcon: true,
  },
}; 