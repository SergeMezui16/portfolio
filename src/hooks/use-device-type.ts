'use client';

import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

type Type = 'desktop' | 'tablet' | 'mobile' | 'laptop';

export const useDeviceType = () => {
  const screen = useWindowSize();
  const [type, setType] = useState<Type>();

  useEffect(() => {
    if (screen.width < 840) setType('mobile');
    if (screen.width >= 840 && screen.width < 1024) setType('tablet');
    if (screen.width >= 1024 && screen.width < 1280) setType('laptop');
    if (screen.width >= 1280) setType('desktop');
  }, [screen.width]);

  if (!screen) return undefined;

  return type;
};
