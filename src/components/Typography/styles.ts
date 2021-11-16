import styled from "styled-components";

import Typography from "./Typography";
import { TypographyVariants, Props } from "./types";

const StyledTypography = styled(Typography)<Props>`
  ${({ theme, variant }) => theme.typography[variant as TypographyVariants]};
  color: ${({ theme }) => theme.palette.text};
`;

StyledTypography.defaultProps = {
  variant: TypographyVariants.BODY1,
  children: null,
};

export default StyledTypography;
