import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollDownIndicator() {
  return (
    <div className="w-full flex justify-center">
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronsDown className="w-6 h-6 text-muted-foreground animate-pulse" />
      </motion.div>
    </div>
  );
}
