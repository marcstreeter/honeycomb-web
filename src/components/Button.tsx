import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import React from 'react';

interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  icon?: React.ReactNode; // left icon
  endIcon?: React.ReactNode; // right icon
  iconColor?: string; // color for icons
  children?: React.ReactNode;
  text?: string; // alternative way to provide button text
  className?: string;
  href?: string;
  bgColor?: string; // custom background color
  textColor?: string; // custom text color
  muiColor?: MuiButtonProps['color']; // MUI's original color prop
}

const iconSx = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.3em',
  marginRight: '0.5em',
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
  className = '',
  href,
  bgColor,
  textColor,
  muiColor,
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
  // Determine button text content - prioritize children over text prop
  const buttonContent = children || text;

  const buttonSx = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    background: bgColor || 'var(--color-blue)',
    color: textColor || 'var(--color-white)',
    border: 'none',
    borderRadius: 0,
    fontSize: '1rem',
    fontWeight: 600,
    padding: '0.75em 1.5em',
    cursor: 'pointer',
    transition: 'background 0.2s',
    boxShadow: 'none',
    outline: 'none',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    minWidth: 'auto',
    '&:hover, &:focus': {
      background: 'var(--color-dark-yellow)',
      color: 'var(--color-black)',
    },
    ...style,
  };
  return (
    <MuiButton
      sx={buttonSx}
      startIcon={icon ? renderIcon(icon, true) : undefined}
      endIcon={endIcon ? renderIcon(endIcon, false) : undefined}
      href={href}
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
