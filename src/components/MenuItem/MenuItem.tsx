import { FC } from "react";

import Button, { ButtonVariants } from "components/Button";

import Props from "./types";
import StyledMenuItem from "./styles";

/**
 * List item button to display within Menu
 */
const MenuItem: FC<Props> = ({ children, onClick, closeMenu }) => {
  const handleMenuItemClick = () => {
    closeMenu?.();
    onClick();
  };

  return (
    <StyledMenuItem>
      <Button variant={ButtonVariants.SECONDARY} onClick={handleMenuItemClick}>
        {children}
      </Button>
    </StyledMenuItem>
  );
};

export default MenuItem;
