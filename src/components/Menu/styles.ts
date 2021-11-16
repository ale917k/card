import styled, { css } from "styled-components";

import Button from "components/Button";

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const menuIconBulletStyles = css`
  width: ${({ theme }) => theme.spacing(0.5)};
  height: ${({ theme }) => theme.spacing(0.5)};
  background-color: ${({ theme }) => theme.palette.common.black};
  transition: ${({ theme }) =>
    `background-color ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeInOut}`};
  border-radius: 50%;
`;

const menuIconBulletPseudoClassesStyles = css`
  content: "";
  ${menuIconBulletStyles};
  position: absolute;
  left: 0;
`;

export const MenuIcon = styled.div`
  ${menuIconBulletStyles};
  position: relative;
  margin: ${({ theme }) => theme.spacing(1)};

  &:before {
    ${menuIconBulletPseudoClassesStyles};
    bottom: ${({ theme }) => theme.spacing(1)};
  }

  &:after {
    ${menuIconBulletPseudoClassesStyles};
    top: ${({ theme }) => theme.spacing(1)};
  }
`;

export const StyledButton = styled(Button)`
  position: relative;
  z-index: 3;

  &:hover {
    ${MenuIcon} {
      &,
      &:before,
      &:after {
        background-color: ${({ theme }) => theme.palette.common.white};
      }
    }
  }
`;

export const DropdownWrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  width: ${({ theme }) => theme.spacing(20)};
  background-color: ${({ theme }) => theme.palette.common.white};
  border: ${({ theme }) => `1px solid ${theme.palette.grey[100]}`};
  border-radius: ${({ theme }) => theme.spacing(0.25)};
  margin-top: ${({ theme }) => theme.spacing(1)};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
    visible ? "scale(1) translate(0, 0)" : "scale(0.9) translate(2%, -3%)"};
  transform-origin: top right;
  transition: ${({ theme }) =>
    `all ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeInOut}`};
  transition-property: opacity, transform;
  will-change: opacity, transform;
  z-index: 2;
  pointer-events: ${({ visible }) => (visible ? "all" : "none")};
  overflow: hidden;
`;

export const DropdownMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
