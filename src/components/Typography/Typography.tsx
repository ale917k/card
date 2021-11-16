import { FC, createElement } from "react";

import { Props, TypographyVariants, TypographyVariantMappings } from "./types";

/**
 * Themed typography element for consistent content styles
 */
const Typography: FC<Props> = ({ variant, children, ...props }) =>
  createElement(TypographyVariantMappings[variant || TypographyVariants.BODY1], props, children);

export default Typography;
