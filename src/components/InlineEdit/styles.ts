import styled, { css } from "styled-components";

import { StyledEditableText } from "./types";

const textInheritableStyles = css<StyledEditableText>`
  font: inherit;
  color: inherit;
  text-align: inherit;
  padding: 0;
  background: none;
  outline: none;
`;

export const TextButton = styled.span<StyledEditableText>`
  ${({ isEditMode }) => !isEditMode && textInheritableStyles};
  display: ${({ isEditMode }) => (!isEditMode ? "flex" : "none")};
  text-decoration: underline #000 dotted;
  cursor: ${({ isEditMode }) => (!isEditMode ? "pointer" : "default")};
`;

const textareaSpacingStyles = css`
  grid-area: 1 / 1 / 2 / 2;
  padding: 0.5rem;
  font: inherit;
`;

export const GrowWrap = styled.span<StyledEditableText>`
  display: ${({ isEditMode }) => (isEditMode ? "grid" : "none")};

  &:after {
    content: attr(data-replicated-value) " ";
    ${textareaSpacingStyles};
    white-space: pre-wrap;
    word-break: break-word;
    visibility: hidden;
  }
`;

export const TextArea = styled.textarea`
  ${textareaSpacingStyles};
  border: ${({ theme }) => `1px solid ${theme.palette.common.black}`};
  resize: none;
  overflow: hidden;
`;
