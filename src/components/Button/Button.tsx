import { FC } from "react";

import { ButtonVariants, ButtonSizes, ButtonTypes, Props } from "./types";
import StyledButton from "./styles";

/**
 * Primary UI component for user interactions.
 */
const Button: FC<Props> = ({
  type = ButtonTypes.BUTTON,
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.MEDIUM,
  icon = false,
  children,
  className = "",
  onClick,
}) => (
  <StyledButton
    type={type}
    variant={variant}
    size={size}
    icon={icon}
    className={className}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default Button;
