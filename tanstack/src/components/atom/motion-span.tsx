import { type ComponentProps } from 'react';
import { motion } from 'motion/react';

export type MotionSpanProps = ComponentProps<typeof motion.span>;

export const MotionSpan = (props: MotionSpanProps) => {
  return (
    <motion.span initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} {...props} />
  );
};
