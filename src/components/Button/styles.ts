import styled from "styled-components";

import {
  ButtonVariants,
  ButtonSizes,
  ButtonVariantHoveredBgMappings,
  ButtonVariantFocusedBgMappings,
  ButtonVariantBorderRadiusMappings,
  ButtonVariantPaddingMappings,
  Props,
} from "./types";

const StyledButton = styled.button<Omit<Props, "type">>`
  display: flex;
  background-color: ${({ theme, variant }) =>
    variant === ButtonVariants.PRIMARY ? theme.palette.primary.main : "transparent"};
  border: ${({ theme, variant }) =>
    variant === ButtonVariants.SECONDARY ? `1px solid ${theme.palette.grey[100]}` : "none"};
  border-radius: ${({ variant }) => ButtonVariantBorderRadiusMappings[variant as ButtonVariants]};
  padding: ${({ size, icon }) => ButtonVariantPaddingMappings(icon)[size as ButtonSizes]};
  font-weight: 700;
  line-height: 1;
  transition: ${({ theme }) =>
    `background-color ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeInOut}`};
  cursor: pointer;

  &:hover {
    background-color: ${({ variant }) => ButtonVariantHoveredBgMappings[variant as ButtonVariants]};
  }

  &:active {
    background-color: ${({ variant }) => ButtonVariantFocusedBgMappings[variant as ButtonVariants]};
  }
`;

export default StyledButton;
