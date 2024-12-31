type ColorVariantConfig = Partial<{
  color: string
  backgroundColor: string
  borderColor: string
}>

export type Config = Partial<{
  className: string
  prefix: string
}>

export type ColorVariants = Partial<{
  [k: string]: {
    color: string
    backgroundColor: string
    borderColor: string
    boxShadow: string
    hover?: ColorVariantConfig
    active?: ColorVariantConfig
    outline?: Partial<{
      normal: ColorVariantConfig
      hover: ColorVariantConfig
      active: ColorVariantConfig
      dark?: Partial<{
        normal: ColorVariantConfig
        hover: ColorVariantConfig
        active: ColorVariantConfig
      }>
    }>
    dark?: Partial<{
      normal: ColorVariantConfig
      hover: ColorVariantConfig
      active: ColorVariantConfig
    }>
  }
}>

export type SizeVariants = {
  [k: string]: {
    padding: string
    fontWeight: string
    fontSize: string
    lineHeight: string
  }
}

export type ShapeVariants = {
  [k: string]: string
}

declare function plugin(options?: Config): {
  handler: () => void
}

declare namespace plugin {
  const __isOptionsFunction: true;
}

export default plugin;
