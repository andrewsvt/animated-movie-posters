import React, { useRef } from 'react';

import { IMovieTypes } from '../types';

import { motion } from '../framer-motion';

interface MovieProps {
  movie: IMovieTypes;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }} //remains visible after the first display
      exit={{ opacity: 0 }} //fade out
    >
      <h1 className="text-sm block h-8 truncate">{movie.title}</h1>
      <img
        className="w-full h-[35vh] object-cover rounded-2xl"
        src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
        alt=""></img>
    </motion.div>
  );
};

export default Movie;
