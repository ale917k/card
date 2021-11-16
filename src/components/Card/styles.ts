import styled, { css } from "styled-components";

import { StyledEditableText } from "components/InlineEdit";
import Typography from "components/Typography";
import Thumbnail from "components/Thumbnail";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.spacing(50)};
  min-height: ${({ theme }) => theme.spacing(60)};
`;

export const Cover = styled(Thumbnail)`
  position: relative;
  transition: ${({ theme }) =>
    `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`};
  transition-property: opacity, transform;
  will-change: opacity, transform;
`;

export const Content = styled.div`
  position: relative;
  min-height: ${({ theme }) => theme.spacing(17)};
  max-height: ${({ theme }) => theme.spacing(17)};
  margin: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(4)} ${theme.spacing(9)}`};
  transition: ${({ theme }) =>
    `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`};
  transition-property: max-height, transform;
  will-change: max-height, transform;
`;

export const Title = styled(Typography)`
  display: -webkit-box;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const Subtitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const Description = styled(Typography)`
  display: -webkit-box;
  opacity: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  pointer-events: none;
  transition: ${({ theme }) =>
    `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`};
  transition-property: height, opacity;
  will-change: height, opacity;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const visibleDescriptionStyles = css`
  opacity: 1;
  pointer-events: all;
`;

const articleEditStyles = css<StyledEditableText>`
  ${Content} {
    max-height: ${({ theme }) => theme.spacing(100)};
    overflow: hidden;
  }

  ${Description} {
    ${visibleDescriptionStyles};
  }
`;

const articleHoverStyles = css<StyledEditableText>`
  &:hover {
    ${Cover} {
      opacity: 0;
      transform: translateY(-100%);
    }

    ${Content} {
      transform: ${({ theme }) => `translateY(${theme.spacing(-30)})`};
    }

    ${Description} {
      ${visibleDescriptionStyles};
    }
  }
`;

export const Article = styled.article<StyledEditableText>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  border: ${({ theme }) => `1px solid ${theme.palette.grey[100]}`};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  overflow: hidden;

  ${({ isEditMode }) => (isEditMode ? articleEditStyles : articleHoverStyles)}
`;
