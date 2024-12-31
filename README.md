<p>
    <a href="https://www.npmjs.com/package/@quark-toolkit/tw-plugin-buttons"><img src="https://img.shields.io/npm/dm/%40quark-toolkit%2Ftw-plugin-buttons" alt="Total Downloads"></a>
    <a href="https://github.com/quark-studio/tw-plugin-buttons/releases"><img src="https://img.shields.io/github/v/release/quark-studio/tw-plugin-buttons" alt="Latest Release"></a>
    <a href="https://github.com/quark-studio/tw-plugin-buttons/blob/main/LICENSE"><img src="https://img.shields.io/github/license/quark-studio/tw-plugin-buttons" alt="License"></a>
</p>

------

<img src="https://github.com/quark-studio/tw-plugin-buttons/blob/main/screenshots/preview.png" alt="Preview">


## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Enable plugin](#enable-plugin)
  - [Extending](#extending)
  - [Example](#example)

## Getting started

This plugin for [Tailwind](https://tailwindcss.com/) that simplify work with buttons on your project. Forget of repeating a lots of utility classes in different places, just use aliases like `btn`, `btn-primary`, `btn-sm` and etc.

Truly easy to customize bundle of buttons just by overriding tailwind theme config.

By default provides basic buttons variants, that allows you to use stylish and fully accessible buttons out-of-the-box.

## Installation

First of all make sure that you have [tailwindcss](https://tailwindcss.com/docs/installation) installed correctly.

Then add dependency using one of package managers by running one of following commands:

via npm
```bash
npm install @quark-toolkit/tw-plugin-buttons --save-dev
```

via yarn
```bash
yarn add --dev @quark-toolkit/tw-plugin-buttons
```

via bun
```bash
bun add --dev @quark-toolkit/tw-plugin-buttons
```

## Enable plugin

Import plugin in your `tailwind.config.ts` by adding:

```typescript
import { default as QuarkButtons } from '@quark-toolkit/tw-plugin-buttons';
```

Then add it into [plugins](https://tailwindcss.com/docs/configuration#plugins) directive:

```typescript
export default {
  content: [
    ...
  ],
  plugins: [
    ...
    QuarkButtons,
  ],
} satisfies Config;
```

You can customize the plugin if you wish just by call `QuarkButtons` as function, with object that contains following options:

- `prefix` - Used in css exposed variables to prevent possible collisions. By default = `qk`.
- `className` - Used as the basis for component class names. By default = `btn`.

## Extending

By default you can use predefined set of components, or extend / override existing buttons just by editing neccessary tailwind [theme](https://tailwindcss.com/docs/theme) configuration.

- `btnColorVariants` - Each color set in this object = new button variant with name according to object key.

By default contains following variants: `primary`, `secondary`, `success`, `danger`, `warning`.

- `btnSizeVariants` - Creates utility-classes for buttons sizing.

By default contains following variants: `sm`, `lg`.

- `btnShapeVariants` - Creates utility-classes for buttons border radius configurations.

By default contains following variants: `square`, `pill`.

## Example

This is default theme extension provided by this plugin which adds primary button variant:
```
primary: {
  boxShadow: '0 0 0 0.25rem rgba(50, 130, 250, 0.5)',
  color: colors.white,
  borderColor: colors.indigo[700],
  backgroundColor: colors.indigo[600],
  hover: {
    backgroundColor: colors.indigo[700]
  },
  active: {
    backgroundColor: colors.indigo[800],
    borderColor: colors.indigo[800]
  }
}
```

Secondary variant have difference between "common" and "outline" variant which makes it corresponding to WCAG standards:
```
secondary: {
  boxShadow: '0 0 0 0.25rem rgba(220, 220, 220, 0.5)',
  color: colors.gray[800],
  borderColor: colors.gray[300],
  backgroundColor: colors.gray[100],
  hover: {
    backgroundColor: colors.gray[200]
  },
  active: {
    backgroundColor: colors.gray[300],
    borderColor: colors.gray[300]
  },
  outline: {
    normal: {
      backgroundColor: colors.gray[500],
      borderColor: colors.gray[500]
    },
    hover: {
      color: colors.white,
      backgroundColor: colors.gray[600],
      borderColor: colors.gray[600]
    },
    active: {
      backgroundColor: colors.gray[700],
      borderColor: colors.gray[700]
    },
    dark: {
      normal: {
        borderColor: colors.gray[400],
        color: colors.gray[400]
      },
      hover: {
        backgroundColor: colors.gray[500],
        borderColor: colors.gray[500]
      },
      active: {
        backgroundColor: colors.gray[600],
        borderColor: colors.gray[600]
      }
    }
  }
}
```

For additional info about theme extension allowed options watch [this](https://github.com/quark-studio/tw-plugin-buttons/blob/main/dist/types/index.d.ts).
