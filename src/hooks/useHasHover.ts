import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

function isMobileContext(): boolean {
  return (
    !window.matchMedia("(hover: hover)").matches ||
    window.innerWidth < MOBILE_BREAKPOINT
  );
}

export function useHasHover(): boolean {
  const [hasHover, setHasHover] = useState(() => !isMobileContext());

  useEffect(() => {
    const update = () => setHasHover(!isMobileContext());

    const mq = window.matchMedia("(hover: hover)");
    mq.addEventListener("change", update);
    window.addEventListener("resize", update);

    return () => {
      mq.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return hasHover;
}
