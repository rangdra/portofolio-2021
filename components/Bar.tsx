import { FunctionComponent } from "react";
import { Skill } from "../types";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{ data: Skill }> = ({
  data: { Icon, name, level, bgColor },
}) => {
  const bar_width = `${level}`;
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  let className =
    name === "React: CRA and NextJs" ? "animation-spin mr-3" : "mr-3";

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
        style={{ width: level }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className={className} />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
