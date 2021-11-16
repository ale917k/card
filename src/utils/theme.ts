/**
 * Generate media query which selects all devices with screen size larger than 'min' defined value.
 *
 * @param min - Device min-width
 * @returns CSS media query
 */
export const mediaUp = (min: number): string => `@media only screen and (min-width: ${min || 0}px)`;

/**
 * Generate media query which selects all devices with screen size thinner than 'max' defined value.
 *
 * @param max - Device max-width
 * @returns CSS media query
 */
export const mediaDown = (max: number): string =>
  `@media only screen and (max-width: ${max || 0}px)`;

/**
 * Generate media query which selects all devices with screen size between 'min' and 'max' defined values.
 *
 * @param min - Device min-width
 * @param max - Device max-width
 * @returns CSS media query
 */
export const mediaBetween = (min: number, max: number): string =>
  `@media only screen and (min-width: ${min || 0}px) and (max-width: ${max || 0}px)`;
