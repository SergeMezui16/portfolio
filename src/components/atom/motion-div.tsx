'use client';

import { HTMLAttributes } from 'react';
import { MotionProps, motion } from 'framer-motion';

export type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps;

export const MotionDiv = (props: MotionDivProps) => {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: -5 }}
      className='y-5 mt-4'
      {...props}
    />
  );
};
