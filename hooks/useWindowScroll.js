import {useCallback, useEffect, useMemo, useState} from "react";
import throttle from 'lodash.throttle';

const useWindowScroll = () => {
  const [yOffset, setYOffset] = useState(0);

  const onScroll = useCallback(throttle(event => {
    setYOffset(window.pageYOffset);
  }, 50), []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, []);

  return useMemo(() => yOffset, [yOffset]);
}

export default useWindowScroll;