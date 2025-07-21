import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import HoneyIcon from './HoneyIcon';

// Mock the ToolBoxIcon
vi.mock('../assets/icons/ToolBoxIcon', () => ({
  default: ({ style, ...props }: any) => (
    <div data-testid="toolbox-icon" style={style} {...props}>
      ToolBox
    </div>
  ),
}));

describe('HoneyIcon', () => {
  it('renders without crashing', () => {
    render(<HoneyIcon />);
    expect(screen.getByTestId('toolbox-icon')).toBeInTheDocument();
  });

  it('renders default ToolBoxIcon when no icon is provided', () => {
    render(<HoneyIcon />);

    const defaultIcon = screen.getByTestId('toolbox-icon');
    expect(defaultIcon).toBeInTheDocument();
    expect(defaultIcon).toHaveStyle('color: rgb(255, 255, 255)'); // CSS color values are normalized
    expect(defaultIcon).toHaveStyle('width: 22px');
    expect(defaultIcon).toHaveStyle('height: 22px');
  });

  it('renders custom icon when provided', () => {
    const customIcon = <span data-testid="custom-icon">Custom</span>;
    render(<HoneyIcon icon={customIcon} />);

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('toolbox-icon')).not.toBeInTheDocument();
  });

  it('creates the correct layered hexagon structure', () => {
    const { container } = render(<HoneyIcon />);

    // Check for the main container
    const mainContainer = container.firstChild as HTMLElement;
    expect(mainContainer).toHaveStyle('position: relative');
    expect(mainContainer).toHaveStyle('width: 80px');
    expect(mainContainer).toHaveStyle('height: 90px');

    // Check for SVG polygons (hexagons)
    const polygons = container.querySelectorAll('polygon');
    expect(polygons).toHaveLength(3); // black, white, red hexagons

    // Check hexagon colors
    expect(polygons[0]).toHaveAttribute('fill', 'black');
    expect(polygons[1]).toHaveAttribute('fill', 'white');
    expect(polygons[2]).toHaveAttribute('fill', '#e00404'); // THEME_RED
  });

  it('positions hexagons with correct layering', () => {
    const { container } = render(<HoneyIcon />);

    // Find divs with absolute positioning (hexagon layers)
    const absoluteDivs = Array.from(container.querySelectorAll('div')).filter(
      (div) => div.style.position === 'absolute'
    );

    expect(absoluteDivs.length).toBeGreaterThanOrEqual(3); // At least 3 layers + icon container

    // Check that first layer (black hexagon) is positioned at top-left
    const firstLayer = absoluteDivs[0];
    expect(firstLayer).toHaveStyle('position: absolute');
    expect(firstLayer).toHaveStyle('top: 0px');
    expect(firstLayer).toHaveStyle('left: 0px');
  });

  it('centers the icon with visual offset', () => {
    const { container } = render(<HoneyIcon />);

    const iconContainer = Array.from(container.querySelectorAll('div')).find(
      (div) => div.style.transform === 'translateY(6%)'
    );

    expect(iconContainer).toBeTruthy();
    expect(iconContainer).toHaveStyle('display: flex');
    expect(iconContainer).toHaveStyle('align-items: center');
    expect(iconContainer).toHaveStyle('justify-content: center');
    expect(iconContainer).toHaveStyle('transform: translateY(6%)');
  });

  it('uses correct SVG viewBox for hexagons', () => {
    const { container } = render(<HoneyIcon />);

    const svgs = container.querySelectorAll('svg');
    svgs.forEach((svg) => {
      expect(svg).toHaveAttribute('viewBox', '0 0 100 110');
    });
  });

  it('applies correct polygon points for hexagon shape', () => {
    const { container } = render(<HoneyIcon />);

    const polygons = container.querySelectorAll('polygon');
    polygons.forEach((polygon) => {
      expect(polygon).toHaveAttribute('points', '50,5 95,30 95,80 50,105 5,80 5,30');
    });
  });

  it('renders with React node as custom icon', () => {
    const CustomComponent = () => <div data-testid="custom-component">Custom Component</div>;

    render(<HoneyIcon icon={<CustomComponent />} />);

    expect(screen.getByTestId('custom-component')).toBeInTheDocument();
    expect(screen.queryByTestId('toolbox-icon')).not.toBeInTheDocument();
  });
});
