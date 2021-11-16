import { useState, useEffect } from "react";

import theme from "theme";

/**
 * Hook to mount / unmount components with animation.
 *
 * @param showComponent - Check if component to animate needs to show
 * @return Boolean which defines if component is mounted / unmounted
 */
const useDelayUnmount = (showComponent: boolean): boolean => {
  // Check component visibility and mount / unmount component accordingly
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    // Mount component if it needs to show (animation will follow); Unmount if it needs to hide (once animation is completed)
    if (showComponent && !shouldRender) {
      setShouldRender(true);
    } else if (!showComponent && shouldRender) {
      timeout = setTimeout(() => setShouldRender(false), theme.transitions.duration.short);
    }

    // Cleanup any timeout leftoff
    return () => clearTimeout(timeout);
  }, [showComponent, shouldRender]);

  return shouldRender;
};

export default useDelayUnmount;
