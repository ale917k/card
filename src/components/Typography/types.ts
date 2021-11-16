export const enum TypographyVariants {
  BODY1 = "body1",
  BODY2 = "body2",
  CAPTION = "caption",
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  SUBTITLE1 = "subtitle1",
  SUBTITLE2 = "subtitle2",
}

/**
 * Mappings to convert TypographyVariants to type of html element to render.
 */
export const TypographyVariantMappings = Object.freeze({
  [TypographyVariants.BODY1]: "p",
  [TypographyVariants.BODY2]: "p",
  [TypographyVariants.CAPTION]: "span",
  [TypographyVariants.H1]: "h1",
  [TypographyVariants.H2]: "h2",
  [TypographyVariants.H3]: "h3",
  [TypographyVariants.H4]: "h4",
  [TypographyVariants.H5]: "h5",
  [TypographyVariants.H6]: "h6",
  [TypographyVariants.SUBTITLE1]: "h6",
  [TypographyVariants.SUBTITLE2]: "h6",
});

/**
 * Typography component props.
 */
export interface Props {
  /**
   * Variants for themed and consistent typography content types
   */
  variant?: TypographyVariants;
}
