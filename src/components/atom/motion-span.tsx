"use client";

import { HTMLAttributes } from "react";
import { MotionProps, motion } from "framer-motion";

export type MotionSpanProps = HTMLAttributes<HTMLSpanElement> & MotionProps;

export const MotionSpan = (props: MotionSpanProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      {...props}
    />
  );
};
