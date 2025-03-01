"use client";

import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

type Type = "desktop" | "tablet" | "mobile" | "laptop";

/**
 * Hook to determine the device type based on window size.
 * @return {Type | undefined} The current device type or undefined.
 */
export const useDeviceType = (): Type | undefined => {
  const screen = useWindowSize();
  const [type, setType] = useState<Type>();

  useEffect(() => {
    if (screen?.width < 840) {
      setType("mobile");
    } else if (screen?.width >= 840 && screen?.width < 1024) {
      setType("tablet");
    } else if (screen?.width >= 1024 && screen?.width < 1280) {
      setType("laptop");
    } else if (screen?.width >= 1280) {
      setType("desktop");
    }
  }, [screen?.width]);

  if (!screen) {
    return undefined;
  }

  return type;
};
