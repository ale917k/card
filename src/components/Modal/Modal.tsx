import { FC, useEffect } from "react";
import { createPortal } from "react-dom";

import useDelayUnmount from "hooks/useDelayUnmount";
import usePortal from "hooks/usePortal";

import Props from "./types";
import { Wrapper, Background, Content } from "./styles";

/**
 * Generic modal component.
 */
const Modal: FC<Props> = ({ id, showModal, closeModal, children }) => {
  const target = usePortal(id);
  const shouldRender = useDelayUnmount(showModal);

  useEffect(() => {
    if (shouldRender) {
      // Append modal-open class to body so to remove page overflow while modal is active
      document.body.classList.add("modal-open");
    }

    // Remove body custom class on modal unmount
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [shouldRender]);

  return shouldRender
    ? createPortal(
        <Wrapper showModal={showModal}>
          <Background type="button" onClick={closeModal} aria-label="Close modal" />

          <Content>{children}</Content>
        </Wrapper>,
        target
      )
    : null;
};

export default Modal;
