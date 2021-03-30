import { useEffect, useRef } from 'react';

export const useClick = (onClick) => {
    if (typeof onClick !== "function") {
      return;
    }
    const ref = useRef();
    useEffect(() => {
      // copy value
      const element = ref.current;
      // componentDidMount, componentDidUpdate
      if (element) {
        element.addEventListener("click", onClick);
      }
      // componentWillUnMount
      return () => {
        if (element) {
          element.removeEventListener("click", onClick);
        }
      };
    }, []);
    return ref;
};