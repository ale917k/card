import { useState, useEffect, useCallback } from "react";

/**
 * Hook to detect when specified key is pressed.
 *
 * @param targetKey - Target key to watch
 * @returns True if targeted key has been pressed, false if otherwise
 */
const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  /**
   * If pressed key is our target key then set to true
   */
  const downHandler = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    },
    [targetKey]
  );

  /**
   * If released key is our target key then set to false
   */
  const upHandler = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    },
    [targetKey]
  );

  useEffect(() => {
    // Add event listeners
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [downHandler, upHandler]);

  return keyPressed;
};

export default useKeyPress;
