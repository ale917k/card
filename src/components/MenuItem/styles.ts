import styled from "styled-components";

const StyledMenuItem = styled.li`
  & > * {
    width: 100%;
    border: none;
    transition-property: background-color, color;

    &:hover {
      color: ${({ theme }) => theme.palette.common.white};
    }
  }
`;

export default StyledMenuItem;
