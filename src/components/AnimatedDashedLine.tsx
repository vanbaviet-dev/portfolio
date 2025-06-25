import { motion } from "framer-motion";

type DashedLineProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
};

export default function AnimatedDashedLine({
  x1,
  y1,
  x2,
  y2,
  color,
}: DashedLineProps) {
  const path = `M${x1} ${y1} L${x2} ${y2}`;
  return (
    <motion.path
      d={path}
      stroke={color}
      strokeWidth="2"
      strokeDasharray="6 6"
      strokeLinecap="round"
      initial={{ strokeDashoffset: 0 }}
      animate={{ strokeDashoffset: -12 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.5,
        ease: "linear",
      }}
    />
  );
}
