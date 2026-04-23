import { HTMLAttributes } from 'react';
import { type m, motion } from 'motion/react';

export type MotionSpanProps = HTMLAttributes<HTMLSpanElement> & m;

export const MotionSpan = (props: MotionSpanProps) => {
  return (
    <motion.span initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} {...props} />
  );
};
