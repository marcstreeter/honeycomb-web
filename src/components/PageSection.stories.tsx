import type { Meta, StoryObj } from '@storybook/react';
import PageSection from './PageSection';

const meta: Meta<typeof PageSection> = {
  title: 'Components/PageSection',
  component: PageSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageSection>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Sample Section</h2>
        <p>This is a sample page section with default styling.</p>
      </div>
    ),
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'custom-section',
    children: (
      <div style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
        <h2>Custom Section</h2>
        <p>This section has a custom CSS class applied.</p>
      </div>
    ),
  },
};

export const WithCustomStyle: Story = {
  args: {
    style: { backgroundColor: '#e3f2fd', border: '2px solid #2196f3' },
    children: (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ color: '#1976d2' }}>Styled Section</h2>
        <p>This section has custom inline styles applied.</p>
      </div>
    ),
  },
};

export const WithRichContent: Story = {
  args: {
    children: (
      <div style={{ padding: '2rem' }}>
        <h2>Rich Content Section</h2>
        <p>This section contains various types of content:</p>
        <ul>
          <li>Text content</li>
          <li>Lists</li>
          <li>Multiple paragraphs</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <button type="button" style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>
          Sample Button
        </button>
      </div>
    ),
  },
};
