import { useEffect, MutableRefObject } from "react";

/**
 * Hook to trigger custom actions when user clicks outside a given target element.
 *
 * @param ref - Reference of element to listen to
 * @param handler - Action to trigger when user clicks outside referenced element
 */
const useOnClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    // Add event listeners
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup listeners
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
