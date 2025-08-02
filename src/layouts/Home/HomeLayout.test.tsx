import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomeLayout from './HomeLayout';

// Mock all section components
vi.mock('./AboutSection', () => ({
  default: () => <div data-testid="about-section">About Section</div>,
}));

vi.mock('./ComfortGuarantee', () => ({
  default: () => <div data-testid="comfort-guarantee">Comfort Guarantee</div>,
}));

vi.mock('./ComfyClub', () => ({
  default: () => <div data-testid="comfy-club">Comfy Club</div>,
}));

vi.mock('./CTASection', () => ({
  default: () => <div data-testid="cta-section">CTA Section</div>,
}));

vi.mock('./DiscountsSection', () => ({
  default: () => <div data-testid="discounts-section">Discounts Section</div>,
}));

vi.mock('./HeroSection', () => ({
  default: () => <div data-testid="hero-section">Hero Section</div>,
}));

// vi.mock('./KeyDifferentiators', () => ({
//   default: () => <div data-testid="key-differentiators">Key Differentiators</div>,
// }));

vi.mock('./ServiceAreasSection', () => ({
  default: () => <div data-testid="service-areas-section">Service Areas Section</div>,
}));

vi.mock('./ServicesSection', () => ({
  default: () => <div data-testid="services-section">Services Section</div>,
}));

vi.mock('./TestimonialsSection', () => ({
  default: () => <div data-testid="testimonials-section">Testimonials Section</div>,
}));

describe('HomeLayout', () => {
  it('renders without crashing', () => {
    render(<HomeLayout />);
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
  });

  it('renders all main sections', () => {
    render(<HomeLayout />);

    // Sections in the grid wrapper
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    // expect(screen.getByTestId('key-differentiators')).toBeInTheDocument();
    expect(screen.getByTestId('services-section')).toBeInTheDocument();

    // Individual sections
    expect(screen.getByTestId('comfort-guarantee')).toBeInTheDocument();
    expect(screen.getByTestId('comfy-club')).toBeInTheDocument();
    expect(screen.getByTestId('testimonials-section')).toBeInTheDocument();
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
    expect(screen.getByTestId('discounts-section')).toBeInTheDocument();
    expect(screen.getByTestId('service-areas-section')).toBeInTheDocument();
    expect(screen.getByTestId('cta-section')).toBeInTheDocument();
  });

  it('renders sections in correct order', () => {
    render(<HomeLayout />);

    const sections = [
      'hero-section',
      // 'key-differentiators',
      'services-section',
      'comfort-guarantee',
      'comfy-club',
      'testimonials-section',
      'about-section',
      'discounts-section',
      'service-areas-section',
      'cta-section',
    ];

    sections.forEach((sectionId) => {
      expect(screen.getByTestId(sectionId)).toBeInTheDocument();
    });
  });

  it('wraps first three sections in grid wrapper', () => {
    render(<HomeLayout />);

    const gridWrapper = document.querySelector('.sections-wrapper-grid');
    expect(gridWrapper).toBeInTheDocument();

    const heroSection = screen.getByTestId('hero-section');
    const servicesSection = screen.getByTestId('services-section');

    expect(gridWrapper).toContainElement(heroSection);
    expect(gridWrapper).toContainElement(servicesSection);
  });
});
