import React, { useEffect } from 'react';

import { IMovieTypes } from '../types';

import clsx from 'clsx';

import { motion } from '../framer-motion';

interface FilterProps {
  popular: IMovieTypes[];
  setFiltered: React.Dispatch<React.SetStateAction<IMovieTypes[]>>;
  activeGenre: number;
  setActiveGenre: React.Dispatch<React.SetStateAction<number>>;
}

const buttonVariants = {
  hover: {
    scale: 1.3,
    transition: { type: 'spring', stiffness: 300, damping: 10 },
  },

  tap: {
    scale: 1.1,
  },
};

const Filter: React.FC<FilterProps> = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
    } else {
      const filtered = popular.filter((movie: IMovieTypes) =>
        movie.genre_ids.includes(activeGenre),
      );
      setFiltered(filtered);
    }
  }, [activeGenre]);

  return (
    <div className="flex justify-between md:justify-start text-sm lg:text-base space-x-8">
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => setActiveGenre(0)}
        className={clsx(
          'min-w-[5rem] px-4 py-2 bg-blue-600 text-white rounded-full font-bold cursor-pointer',
          {
            'bg-blue-800': activeGenre === 0,
          },
        )}>
        All
      </motion.button>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => setActiveGenre(35)}
        className={clsx(
          'min-w-[5rem] px-4 py-2 bg-blue-600 text-white rounded-full font-bold cursor-pointer',
          {
            'bg-blue-800': activeGenre === 35,
          },
        )}>
        Comedy
      </motion.button>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => setActiveGenre(28)}
        className={clsx(
          'min-w-[5rem] px-4 py-2 bg-blue-600 text-white rounded-full font-bold cursor-pointer',
          {
            'bg-blue-800': activeGenre === 28,
          },
        )}>
        Action
      </motion.button>
    </div>
  );
};

export default Filter;
