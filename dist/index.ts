import plugin from 'tailwindcss/plugin';
import { default as theme } from './theme';
import type { Config, ColorVariants, SizeVariants, ShapeVariants } from './types';
import type { CSSRuleObject } from 'tailwindcss/types/config';

export default plugin.withOptions((options: Config = { className: 'btn', prefix: 'qk' }) => ({addComponents, theme}) => {
  addComponents({
    [`.${options.className}`]: {
      display: 'inline-block',
      position: 'relative',
      textAlign: 'center',
      textDecoration: 'none',
      verticalAlign: 'middle',
      userSelect: 'none',
      cursor: 'pointer',
      color: `var(--${options.prefix}-${options.className}-color)`,
      padding: `var(--${options.prefix}-${options.className}-padding)`,
      backgroundColor: `var(--${options.prefix}-${options.className}-background-color)`,
      border: `1px solid var(--${options.prefix}-${options.className}-border-color)`,
      borderRadius: `var(--${options.prefix}-${options.className}-border-radius)`,
      fontWeight: `var(--${options.prefix}-${options.className}-font-weight)`,
      fontSize: `var(--${options.prefix}-${options.className}-font-size)`,
      lineHeight: `var(--${options.prefix}-${options.className}-line-height)`,
      transition: 'color 150ms ease-in-out,background-color 150ms ease-in-out,border-color 150ms ease-in-out,text-decoration-color 150ms ease-in-out,fill 150ms ease-in-out,stroke 150ms ease-in-out',
      [`--${options.prefix}-${options.className}-background`]: 'transparent',
      [`--${options.prefix}-${options.className}-border-color`]: 'transparent',
      [`--${options.prefix}-${options.className}-color`]: 'inherit',
      [`--${options.prefix}-${options.className}-padding`]: '0.625rem 1.25rem',
      [`--${options.prefix}-${options.className}-border-radius`]: '0.5rem',
      [`--${options.prefix}-${options.className}-font-weight`]: '400',
      [`--${options.prefix}-${options.className}-font-size`]: '16px',
      [`--${options.prefix}-${options.className}-line-height`]: '1.25rem',
      [`--${options.prefix}-${options.className}-outline`]: '2px solid transparent',
      [`--${options.prefix}-${options.className}-outline-offset`]: '2px',
      '&:focus-visible': {
        zIndex: '2',
        outline: `var(--${options.prefix}-${options.className}-outline)`,
        outlineOffset: `var(--${options.prefix}-${options.className}-outline-offset)`,
      },
      '&:disabled, &:is(.disabled)': {
        opacity: '0.65',
        pointerEvents: 'none',
      },
    },
    [`.${options.className}-toolbar`]: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    [`.${options.className}-group`]: {
      display: 'flex',
      flexFlow: 'row nowrap',
      [`& > .${options.className}`]: {
        borderRadius: '0 !important',
      },
      [`& > .${options.className}:first-child`]: {
        borderTopLeftRadius: `var(--${options.prefix}-${options.className}-border-radius) !important`,
        borderBottomLeftRadius: `var(--${options.prefix}-${options.className}-border-radius) !important`,
      },
      [`& > .${options.className}:last-child`]: {
        borderTopRightRadius: `var(--${options.prefix}-${options.className}-border-radius) !important`,
        borderBottomRightRadius: `var(--${options.prefix}-${options.className}-border-radius) !important`,
      },
      [`& > .${options.className}:not(:first-child)`]: {
        borderLeft: '0 !important',
      },
    },

    ...createColoredButtonList(options.prefix, options.className, theme('btnColorVariants')),
    ...createOutlinedButtonList(options.prefix, options.className, theme('btnColorVariants')),
    ...createSizedButtonList(options.prefix, options.className, theme('btnSizeVariants')),
    ...createShapedButtonList(options.prefix, options.className, theme('btnShapeVariants')),
  }, {
    respectPrefix: false,
  });
}, () => {
  return {
    theme: theme,
  };
});

const createColoredButtonList = (prefix: string, className: string, variants: ColorVariants): CSSRuleObject => {
  const result = {};
  Object.entries(variants).forEach(([_, v]) => {
    result[`.${className}-${_}`] = {
      [`--${prefix}-${className}-color`]: v.color,
      [`--${prefix}-${className}-background-color`]: v.backgroundColor,
      [`--${prefix}-${className}-border-color`]: v.borderColor,
      [`--${prefix}-${className}-box-shadow`]: v.boxShadow,
      [`--${prefix}-${className}-hover-color`]: v.hover?.color ?? v.color,
      [`--${prefix}-${className}-hover-background-color`]: v.hover?.backgroundColor ?? v.backgroundColor,
      [`--${prefix}-${className}-hover-border-color`]: v.hover?.borderColor ?? v.borderColor,
      [`--${prefix}-${className}-active-color`]: v.active?.color ?? v.color,
      [`--${prefix}-${className}-active-background-color`]: v.active?.backgroundColor ?? v.backgroundColor,
      [`--${prefix}-${className}-active-border-color`]: v.active?.borderColor ?? v.borderColor,
      '&:hover': {
        color: `var(--${prefix}-${className}-hover-color)`,
        backgroundColor: `var(--${prefix}-${className}-hover-background-color)`,
        borderColor: `var(--${prefix}-${className}-hover-border-color)`,
      },
      '&:focus-visible': {
        boxShadow: `var(--${prefix}-${className}-box-shadow)`,
      },
      '&:active': {
        color: `var(--${prefix}-${className}-active-color)`,
        backgroundColor: `var(--${prefix}-${className}-active-background-color)`,
        borderColor: `var(--${prefix}-${className}-active-border-color)`,
      },
    };
  });

  return result;
};

const createOutlinedButtonList = (prefix: string, className: string, variants: ColorVariants): CSSRuleObject => {
  const result = {};
  Object.entries(variants).forEach(([_, v]) => {
    result[`.${className}-${_}-outline`] = {
      [`--${prefix}-${className}-color`]: v.outline?.normal?.color ?? v.outline?.normal?.backgroundColor ?? v.backgroundColor,
      [`--${prefix}-${className}-border-color`]: v.outline?.normal?.borderColor ?? v.backgroundColor,
      [`--${prefix}-${className}-background-color`]: 'transparent',
      [`--${prefix}-${className}-box-shadow`]: v.boxShadow,
      [`--${prefix}-${className}-hover-color`]: v.outline?.hover?.color ?? v.color,
      [`--${prefix}-${className}-hover-background-color`]: v.outline?.hover?.backgroundColor ?? v.backgroundColor,
      [`--${prefix}-${className}-hover-border-color`]: v.outline?.hover?.borderColor ?? v.backgroundColor,
      [`--${prefix}-${className}-active-color`]: v.outline?.active?.color ?? v.outline?.hover?.color ?? v.active?.color ?? v.color,
      [`--${prefix}-${className}-active-background-color`]: v.outline?.active?.backgroundColor ?? v.outline?.hover?.backgroundColor ?? v.active?.backgroundColor ?? v.backgroundColor,
      [`--${prefix}-${className}-active-border-color`]: v.outline?.active?.borderColor ?? v.outline?.hover?.borderColor ?? v.active?.borderColor ?? v.borderColor,
      '&:hover': {
        color: `var(--${prefix}-${className}-hover-color)`,
        backgroundColor: `var(--${prefix}-${className}-hover-background-color)`,
        borderColor: `var(--${prefix}-${className}-hover-border-color)`,
      },
      '&:focus-visible': {
        color: `var(--${prefix}-${className}-hover-color)`,
        backgroundColor: `var(--${prefix}-${className}-hover-background-color)`,
        borderColor: `var(--${prefix}-${className}-hover-border-color)`,
        boxShadow: `var(--${prefix}-${className}-box-shadow)`,
      },
      '&:active': {
        color: `var(--${prefix}-${className}-active-color)`,
        backgroundColor: `var(--${prefix}-${className}-active-background-color)`,
        borderColor: `var(--${prefix}-${className}-active-border-color)`,
      },
    };
  });

  return result;
};

const createSizedButtonList = (prefix: string, className: string, variants: SizeVariants): CSSRuleObject => {
  const result = {};
  Object.entries(variants).forEach(([_, v]) => {
    result[`.${className}-${_}`] = {
      [`--${prefix}-${className}-padding`]: v.padding,
      [`--${prefix}-${className}-font-weight`]: v.fontWeight,
      [`--${prefix}-${className}-font-size`]: v.fontSize,
      [`--${prefix}-${className}-line-height`]: v.lineHeight,
    };
  });

  return result;
};

const createShapedButtonList = (prefix: string, className: string, variants: ShapeVariants): CSSRuleObject => {
  const result = {};
  Object.entries(variants).forEach(([_, v]) => {
    result[`.${className}-${_}`] = {
      [`--${prefix}-${className}-border-radius`]: v,
    };
  });

  return result;
};
