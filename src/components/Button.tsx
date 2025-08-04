import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import React from 'react';

interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  icon?: React.ReactNode; // left icon
  endIcon?: React.ReactNode; // right icon
  iconColor?: string; // color for icons
  children?: React.ReactNode;
  text?: string; // alternative way to provide button text
  shortLabel?: string; // short version of the label for compact display
  className?: string;
  href?: string;
  hrefFollow?: boolean;
  bgColor?: string; // custom background color
  bgColorHover?: string; // custom background color on hover
  textColor?: string; // custom text color
  muiColor?: MuiButtonProps['color']; // MUI's original color prop
  showSmall?: boolean; // show short label if provided, otherwise hide label and show only icon
}

const iconSx = {
  display: 'flex',
  alignItems: 'center',
  width: '1em',
  height: '1em',
};
const labelSx = {
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
};

const Button: React.FC<ButtonProps> = ({
  icon,
  endIcon,
  iconColor,
  children,
  text,
  shortLabel,
  className = '',
  href,
  hrefFollow = false,
  bgColor,
  bgColorHover = 'var(--color-dark-yellow)',
  textColor,
  muiColor,
  showSmall = false,
  style,
  ...props
}) => {
  // Helper to clone icon with color if needed
  const renderIcon = (iconNode: React.ReactNode, isStart: boolean) => {
    if (React.isValidElement(iconNode)) {
      // biome-ignore lint/suspicious/noExplicitAny: React element type casting requires any for generic props
      const el = iconNode as React.ReactElement<any, any>;
      return React.cloneElement(el, {
        style: {
          color: iconColor,
          ...(el.props.style || {}),
          ...(isStart ? iconSx : {}),
        },
      });
    }
    return iconNode;
  };
  // Determine button text content based on showSmall state
  const buttonContent = showSmall
    ? shortLabel || null // If showSmall, use shortLabel if provided, otherwise null (icon only)
    : children || text; // If not showSmall, use normal content

  const isIconOnly = showSmall && !shortLabel;

  const buttonSx = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isIconOnly ? '0' : '0.5em',
    background: bgColor || 'var(--color-blue)',
    color: textColor || 'var(--color-white)',
    border: 'none',
    borderRadius: 0,
    fontSize: 'var(--font-size-button)',
    fontWeight: 'var(--font-weight-semibold)',
    padding: isIconOnly ? '0.75em' : '0.75em 1em',
    cursor: 'pointer',
    transition: 'background 0.2s',
    boxShadow: 'none',
    outline: 'none',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    minWidth: isIconOnly ? '3em' : 'auto',
    textTransform: 'capitalize',
    '&:hover, &:focus': {
      background: bgColorHover,
      color: 'var(--color-black)',
    },
    ...style,
  };
  return (
    <MuiButton
      sx={{
        ...buttonSx,
        '& .MuiButton-startIcon': {
          margin: '0',
        },
        '& .MuiButton-endIcon': {
          margin: '0',
        },
      }}
      startIcon={icon ? renderIcon(icon, true) : undefined}
      endIcon={endIcon ? renderIcon(endIcon, false) : undefined}
      href={href}
      target={hrefFollow ? undefined : '_blank'}
      rel={hrefFollow ? undefined : 'noopener noreferrer'}
      component={href ? 'a' : 'button'}
      className={className}
      color={muiColor}
      {...props}
    >
      {buttonContent && <span style={labelSx as React.CSSProperties}>{buttonContent}</span>}
    </MuiButton>
  );
};

export default Button;
