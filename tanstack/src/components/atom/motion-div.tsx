import { HTMLAttributes } from 'react';
import { type m, motion } from 'motion/react';

export type MotionDivProps = HTMLAttributes<HTMLDivElement> & m;

export const MotionDiv = (props: MotionDivProps) => {
  return (
    <motion.div initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} {...props} />
  );
};
