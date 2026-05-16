import { FunctionComponent } from "react";
import { Skill } from "../types";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{ data: Skill }> = ({
  data: { Icon, name, level },
}) => {
  return (
    <div className="mb-md">
      <div className="flex items-center justify-between mb-xs">
        <div className="flex items-center gap-xs">
          <Icon className="w-4 h-4 text-brand-green-dark" aria-hidden="true" />
          <span className="text-body-sm font-medium text-ink">{name}</span>
        </div>
        <span className="text-caption text-steel">{level}</span>
      </div>
      <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-green-dark to-brand-green"
          initial={{ width: 0 }}
          animate={{ width: level }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
};

export default Bar;
