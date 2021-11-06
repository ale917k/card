export const mediaUp = (min: number): string => `@media only screen and (min-width: ${min || 0}px)`;

export const mediaDown = (max: number): string =>
  `@media only screen and (max-width: ${max || 0}px)`;

export const mediaBetween = (min: number, max: number): string =>
  `@media only screen and (min-width: ${min || 0}px) and (max-width: ${max || 0}px)`;
