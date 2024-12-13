import colors from 'tailwindcss/colors';
import type { ColorVariants, SizeVariants, ShapeVariants } from './types';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

const defaultColorVariants: ColorVariants = {
  primary: {
    boxShadow: '0 0 0 0.25rem rgba(50, 130, 250, 0.5)',
    color: colors.white,
    borderColor: colors.indigo[700],
    backgroundColor: colors.indigo[600],
    hover: {
      backgroundColor: colors.indigo[700],
    },
    active: {
      backgroundColor: colors.indigo[800],
      borderColor: colors.indigo[800],
    },
  },
  secondary: {
    boxShadow: '0 0 0 0.25rem rgba(220, 220, 220, 0.5)',
    color: colors.gray[800],
    borderColor: colors.gray[300],
    backgroundColor: colors.gray[100],
    hover: {
      backgroundColor: colors.gray[200],
    },
    active: {
      backgroundColor: colors.gray[300],
      borderColor: colors.gray[300],
    },
    outline: {
      normal: {
        backgroundColor: colors.gray[500],
        borderColor: colors.gray[500],
      },
      hover: {
        color: colors.white,
        backgroundColor: colors.gray[600],
        borderColor: colors.gray[600],
      },
      active: {
        backgroundColor: colors.gray[700],
        borderColor: colors.gray[700],
      },
    },
  },
  success: {
    boxShadow: '0 0 0 0.25rem rgba(60, 150, 110, 0.5)',
    color: colors.white,
    borderColor: colors.green[800],
    backgroundColor: colors.green[700],
    hover: {
      backgroundColor: colors.green[800],
    },
    active: {
      backgroundColor: colors.green[900],
      borderColor: colors.green[900],
    },
  },
  danger: {
    boxShadow: '0 0 0 0.25rem rgba(225, 80, 95, 0.5)',
    color: colors.white,
    borderColor: colors.red[800],
    backgroundColor: colors.red[700],
    hover: {
      backgroundColor: colors.red[800],
    },
    active: {
      backgroundColor: colors.red[900],
      borderColor: colors.red[900],
    },
  },
  warning: {
    boxShadow: '0 0 0 0.25rem rgba(250, 115, 20, 0.5)',
    color: colors.white,
    borderColor: colors.orange[600],
    backgroundColor: colors.orange[500],
    hover: {
      backgroundColor: colors.orange[600],
    },
    active: {
      backgroundColor: colors.orange[700],
      borderColor: colors.orange[700],
    },
  },
};

const defaultSizeVariants: SizeVariants = {
  sm: {
    padding: '0.5rem 0.75rem',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1rem',
  },
  lg: {
    padding: '0.75rem 2.25rem',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '1.5rem',
  },
};

const defaultShapeVariants: ShapeVariants = {
  square: '0',
  pill: '9999px',
};

export default {
  btnColorVariants: defaultColorVariants,
  btnSizeVariants: defaultSizeVariants,
  btnShapeVariants: defaultShapeVariants,
} satisfies Partial<CustomThemeConfig>;
