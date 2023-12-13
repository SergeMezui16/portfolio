'use client';

import { HTMLAttributes } from 'react';
import { MotionProps, motion } from 'framer-motion';

export type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps;

export const MotionDiv = (props: MotionDivProps) => {
  return (
    <motion.div
      // initial={false}
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      {...props}
    />
  );
};
