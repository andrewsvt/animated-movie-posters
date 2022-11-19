import React from 'react';

import { motion } from '../framer-motion';

const Skeleton: React.FC = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: 1.5 }}>
      <div className="h-4 w-28 mb-4 rounded-full bg-[#0e131b]"></div>
      <div className="w-full h-[35vh] object-cover rounded-2xl bg-[#0e131b]"></div>
    </motion.div>
  );
};

export default Skeleton;
