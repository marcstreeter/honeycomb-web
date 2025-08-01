# Centralized Font System

This project now uses a centralized font system defined in `src/App.css` for consistent typography across the entire application.

## Font Variables

All font properties are defined as CSS custom properties (variables) in the `:root` selector of `App.css`:

### Font Families
- `--font-family-primary`: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif (body text, small headings)
- `--font-family-display`: "Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif (large headings, hero text)

### Font Sizes (Base 16px scale)
- `--font-size-xs`: 0.75rem (12px)
- `--font-size-sm`: 0.875rem (14px) 
- `--font-size-base`: 1rem (16px)
- `--font-size-lg`: 1.125rem (18px)
- `--font-size-xl`: 1.25rem (20px)
- `--font-size-2xl`: 1.5rem (24px)
- `--font-size-3xl`: 1.875rem (30px)
- `--font-size-4xl`: 2.25rem (36px)
- `--font-size-5xl`: 3rem (48px)
- `--font-size-6xl`: 3.75rem (60px)
- `--font-size-7xl`: 4.5rem (72px)
- `--font-size-8xl`: 6rem (96px)

### Semantic Font Sizes
- `--font-size-hero-title`: 3rem (48px) - Main hero headlines
- `--font-size-section-title`: 2.25rem (36px) - Section headings
- `--font-size-card-title`: 1.5rem (24px) - Card titles
- `--font-size-body-large`: 1.125rem (18px) - Large body text
- `--font-size-body`: 1rem (16px) - Regular body text
- `--font-size-body-small`: 0.875rem (14px) - Small body text
- `--font-size-caption`: 0.75rem (12px) - Captions, labels
- `--font-size-button`: 1rem (16px) - Button text
- `--font-size-button-large`: 1.125rem (18px) - Large buttons
- `--font-size-nav`: 1.25rem (20px) - Navigation links

### Font Weights
- `--font-weight-light`: 300
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700
- `--font-weight-black`: 900

### Line Heights
- `--line-height-tight`: 1.1
- `--line-height-snug`: 1.2
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.6
- `--line-height-loose`: 2

### Letter Spacing
- `--letter-spacing-tighter`: -0.05em (h1 titles)
- `--letter-spacing-tight`: -0.025em (h2 headings)
- `--letter-spacing-normal`: 0 (default)
- `--letter-spacing-wide`: 0.025em
- `--letter-spacing-wider`: 0.05em

## Typography Utility Classes

The following utility classes are available for consistent typography:

### Heading Classes
- `h1, .text-hero` - Hero title styling (Barlow Black 900, tight letter-spacing -0.05em)
- `h2, .text-section-title` - Section title styling (Barlow Black 900, tight letter-spacing -0.025em)
- `h3, .text-card-title` - Card title styling (Barlow Semibold 600, normal spacing)
- `h4, .text-subtitle` - Subtitle styling (Inter Semibold 600, normal spacing)
- `h5, .text-subheading` - Subheading styling (Inter Medium 500, normal spacing)  
- `h6, .text-small-heading` - Small heading styling (Inter Semibold 600, normal spacing)

### Body Text Classes
- `.text-body-large` - Large body text
- `.text-body` - Regular body text
- `.text-body-small` - Small body text
- `.text-caption` - Caption text

### Button Text Classes
- `.text-button` - Regular button text
- `.text-button-large` - Large button text

### Navigation Text
- `.text-nav` - Navigation link styling

### Font Weight Utilities
- `.font-light` - Light font weight
- `.font-normal` - Normal font weight
- `.font-medium` - Medium font weight
- `.font-semibold` - Semibold font weight
- `.font-bold` - Bold font weight
- `.font-black` - Black font weight

### Line Height Utilities
- `.leading-tight` - Tight line height
- `.leading-snug` - Snug line height
- `.leading-normal` - Normal line height
- `.leading-relaxed` - Relaxed line height
- `.leading-loose` - Loose line height

### Letter Spacing Utilities
- `.tracking-tighter` - Tighter letter spacing (-0.05em)
- `.tracking-tight` - Tight letter spacing (-0.025em)
- `.tracking-normal` - Normal letter spacing (0)
- `.tracking-wide` - Wide letter spacing (0.025em)
- `.tracking-wider` - Wider letter spacing (0.05em)

## Usage Examples

### In CSS
```css
/* For body text */
.my-component {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-body-large);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
}

/* For large headings */
.my-hero-title {
  font-family: var(--font-family-display);
  font-size: var(--font-size-hero-title);
  font-weight: var(--font-weight-black);
  line-height: var(--line-height-tight);
}
```

### In HTML/JSX
```html
<h1 class="text-hero">Main Headline (automatically tight spacing)</h1>
<h2 class="text-section-title">Section Heading (automatically tight spacing)</h2>
<p class="text-body-large font-medium">Large body text with medium weight</p>
<button class="text-button-large">Large Button</button>

<!-- Manual letter spacing control -->
<h3 class="text-card-title tracking-tight">Tighter Card Title</h3>
<p class="text-body tracking-wide">Body text with wider spacing</p>
```

### In Styled Components or MUI sx prop
```javascript
const StyledComponent = styled.div`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-normal);
`;

// Large heading with Barlow
const StyledHeading = styled.h1`
  font-family: var(--font-family-display);
  font-size: var(--font-size-hero-title);
  font-weight: var(--font-weight-black);
`;

// Or in MUI
<Typography sx={{ 
  fontFamily: 'var(--font-family-display)',
  fontSize: 'var(--font-size-card-title)',
  fontWeight: 'var(--font-weight-bold)'
}}>
  Card Title
</Typography>
```

## Responsive Typography

The font system includes responsive scaling for mobile devices:

- **Tablet (768px and below)**: Hero and section titles scale down
- **Mobile (480px and below)**: Further scaling for optimal mobile experience

## Migration

The existing codebase has been updated to use these centralized font variables. When adding new components or modifying existing ones:

1. Use CSS variables instead of hardcoded font values
2. Use semantic font sizes (e.g., `--font-size-body-large`) when possible
3. Apply utility classes for common typography patterns
4. Maintain consistency with the established scale

## Font Implementation Details

### Barlow for Large Typography
- **Hero titles (h1)**: Barlow Black (900 weight) with tighter letter-spacing (-0.05em) for maximum impact
- **Section headings (h2)**: Barlow Black (900 weight) with tight letter-spacing (-0.025em) for strong, bold hierarchy  
- **Card titles (h3)**: Barlow Semibold (600 weight) with normal spacing for clear structure
- **Performance**: Loaded via Google Fonts with `display=swap` for optimal loading

### Inter for Body Text
- **All body text**: Inter for excellent readability
- **Small headings (h4-h6)**: Inter maintains consistency with body content
- **UI elements**: Buttons, navigation, and interface text use Inter

## Benefits

- **Consistency**: All typography follows the same scale and system
- **Visual Hierarchy**: Barlow creates strong distinction for important headings
- **Readability**: Inter ensures excellent body text legibility
- **Performance**: Optimized font loading with preconnect and display=swap
- **Maintainability**: Font changes can be made in one place
- **Responsive**: Built-in responsive scaling
- **Semantic**: Meaningful names make code more readable
- **Flexible**: Easy to customize and extend