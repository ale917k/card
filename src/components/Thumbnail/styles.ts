import styled, { css } from "styled-components";

import { StyledMediaProps } from "./types";

const mediaStyles = css<StyledMediaProps>`
  object-fit: ${({ size }) => size};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`;

export const StyledImg = styled.img<StyledMediaProps>`
  ${mediaStyles};
`;

export const StyledVideo = styled.video<StyledMediaProps>`
  ${mediaStyles};
`;
