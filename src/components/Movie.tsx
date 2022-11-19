import React, { useState } from 'react';

import { IMovieTypes } from '../types';

import { motion, AnimatePresence } from '../framer-motion';
import Modal from './Modal';

interface MovieProps {
  movie: IMovieTypes;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const [modal, setModal] = useState<boolean>(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <motion.div
        onClick={toggleModal}
        layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}>
        <h1 className="text-sm block h-8 truncate">{movie.title}</h1>
        <img
          className="w-full h-[35vh] object-cover rounded-2xl cursor-pointer"
          src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
          alt=""></img>
      </motion.div>
      <AnimatePresence>
        {modal ? <Modal modal={modal} setModal={setModal} movie={movie} /> : ''}
      </AnimatePresence>
    </>
  );
};

export default Movie;
