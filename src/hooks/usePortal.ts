import { useRef, useEffect } from "react";

/**
 * Creates DOM element to be used as React root.
 *
 * @param rootElemId - Id of element to create
 * @returns newly created element
 */
const createRootElement = (rootElemId: string): Element => {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", rootElemId);
  return rootContainer;
};

/**
 * Appends element as last child of body.
 *
 * @param rootElem - Element to append on DOM
 */
const addRootElement = (rootElem: Element) => {
  if (document.body.lastElementChild) {
    document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
  }
};

/**
 * Hook to create a React Portal.
 *
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 *
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param id - The id of the target container, e.g 'modal' or 'spotlight'
 * @returns The DOM node to use as the Portal target
 */
const usePortal = (id: string): Element => {
  const rootElemRef = useRef<Element | null>(null);

  /**
   * Lazy portal initialization.
   *
   * @returns DOM element to use as Portal target
   */
  const getRootElem = (): Element => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div");
    }
    return rootElemRef.current;
  };

  useEffect(() => {
    // Look for existing target DOM element to append to
    const existingParent = document.querySelector(`#${id}`);
    // Parent is either a new root or the existing DOM element
    const parentElem = existingParent || createRootElement(id);

    // If there is no existing DOM element, add a new one
    if (!existingParent) {
      addRootElement(parentElem);
    }

    // Add the detached element to the parent
    if (rootElemRef.current) {
      parentElem.appendChild(rootElemRef.current);
    }

    // Cleanup function
    return () => {
      rootElemRef.current?.remove();

      if (parentElem.childNodes.length === 0) {
        parentElem.remove();
      }
    };
  }, [id]);

  return getRootElem();
};

export default usePortal;
