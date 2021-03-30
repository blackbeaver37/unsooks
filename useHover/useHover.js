import { useEffect, useRef } from 'react';

export const useHover = (onHover) => {
    if (typeof onHover !== "function") {
      return;
    }
    const ref = useRef();
    useEffect(() => {
      // copy value
      const element = ref.current;
      // componentDidMount, componentDidUpdate
      if (element) {
        element.addEventListener("mouseenter", onHover);
      }
      // componentWillUnMount
      return () => {
        if (element) {
          element.removeEventListener("mouseenter", onHover);
        }
      };
    }, []);
    return ref;
};