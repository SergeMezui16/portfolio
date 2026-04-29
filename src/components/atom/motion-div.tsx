import { type ComponentProps } from 'react';
import { motion } from 'motion/react';

export type MotionDivProps = ComponentProps<typeof motion.div>;

export const MotionDiv = (props: MotionDivProps) => {
  return (
    <motion.div initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} {...props} />
  );
};
