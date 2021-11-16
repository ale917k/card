import { FC, useState, useRef, useEffect, cloneElement, ReactElement } from "react";

import { ButtonSizes, ButtonVariants } from "components/Button";

import { Wrapper, StyledButton, MenuIcon, DropdownWrapper, DropdownMenu } from "./styles";

/**
 * Dropdown menu.
 */
const Menu: FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  /**
   * Close dropdown menu.
   */
  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Set event listeners to close menu when clicking away
    if (open) {
      document.addEventListener("mouseup", closeMenu);
      document.addEventListener("touchend", closeMenu);
    }

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mouseup", closeMenu);
      document.removeEventListener("touchend", closeMenu);
    };
  });

  return (
    <Wrapper ref={containerRef}>
      <StyledButton
        variant={ButtonVariants.SECONDARY}
        size={ButtonSizes.SMALL}
        icon
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </StyledButton>

      {children && (
        <DropdownWrapper visible={open}>
          <DropdownMenu>
            {cloneElement(children as ReactElement, { closeMenu: () => setOpen(false) })}
          </DropdownMenu>
        </DropdownWrapper>
      )}
    </Wrapper>
  );
};

export default Menu;
