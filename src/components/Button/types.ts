import theme from "theme";

export const enum ButtonTypes {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

export const enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export const enum ButtonSizes {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
}

/**
 * Mappings to convert ButtonVariants to background-color css styles on button hovered.
 */
export const ButtonVariantHoveredBgMappings = Object.freeze({
  [ButtonVariants.PRIMARY]: `${theme.palette.primary.main}`,
  [ButtonVariants.SECONDARY]: `${theme.palette.primary.main}`,
  [ButtonVariants.TERTIARY]: `${theme.palette.grey[50]}`,
});

/**
 * Mappings to convert ButtonVariants to background-color css styles on button focused.
 */
export const ButtonVariantFocusedBgMappings = Object.freeze({
  [ButtonVariants.PRIMARY]: `${theme.palette.primary.dark}`,
  [ButtonVariants.SECONDARY]: `${theme.palette.primary.dark}`,
  [ButtonVariants.TERTIARY]: `${theme.palette.grey[100]}`,
});

/**
 * Mappings to convert ButtonVariants to border-radius css styles.
 */
export const ButtonVariantBorderRadiusMappings = Object.freeze({
  [ButtonVariants.PRIMARY]: "3em",
  [ButtonVariants.SECONDARY]: `${theme.spacing(0.25)}`,
  [ButtonVariants.TERTIARY]: "50%",
});

/**
 * Mappings to convert ButtonSizes to padding css styles.
 *
 * @param icon - Square padding spacing if true
 * @returns Mapped button padding value
 */
export const ButtonVariantPaddingMappings = (icon?: boolean): { [key: string]: string } =>
  Object.freeze({
    [ButtonSizes.LARGE]: `${theme.spacing(2)} ${icon ? "" : theme.spacing(3)}`,
    [ButtonSizes.MEDIUM]: `${theme.spacing(1.5)} ${icon ? "" : theme.spacing(2.5)}`,
    [ButtonSizes.SMALL]: `${theme.spacing(1)} ${icon ? "" : theme.spacing(2)}`,
  });

/**
 * Button component props.
 */
export interface Props {
  /**
   * Type of native button action
   */
  type?: ButtonTypes;
  /**
   * Variant of styles to apply
   */
  variant?: ButtonVariants;
  /**
   * How large should the button be?
   */
  size?: ButtonSizes;
  /**
   * Square paddings if set on true
   */
  icon?: boolean;
  /**
   * Optional custom style classes
   */
  className?: string;
  /**
   * Click event handler
   */
  onClick: () => void;
}
