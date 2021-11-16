import styled from "styled-components";

import { ReactComponent as StarSvg } from "assets/icons/star.svg";

const StyledStarSvg = styled(StarSvg)<{ $active: boolean }>`
  width: ${({ theme }) => theme.spacing(2)};

  path {
    &[data-name="fill"] {
      opacity: ${({ $active }) => ($active ? 1 : 0)};
    }
  }
`;

export default StyledStarSvg;
