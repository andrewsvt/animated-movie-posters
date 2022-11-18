import React, { useState } from 'react';

import { IMovieTypes } from '../types';

import { motion, AnimatePresence } from '../framer-motion';

interface ModalProps {
  movie: IMovieTypes;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ modal, setModal, movie }) => {
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <motion.div layout className="w-screen h-screen fixed top-0 left-0">
      <div className="fixed w-full h-full bg-black bg-opacity-80" onClick={toggleModal}></div>
      <div className="flex flex-row max-w-[50%] w-full max-h-[50%] h-full translate-x-[50%] translate-y-[50%] z-20 space-x-2">
        <div className="flex flex-[1] h-full w-full">
          <img
            className="h-full object-cover rounded-3xl"
            src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
            alt=""></img>
        </div>
        <div className="flex flex-col bg-[#121924] flex-1 rounded-3xl p-8 justify-between">
          <div className="space-y-8">
            <h2 className="text-3xl">{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
          <div>
            <button
              className="w-full px-4 py-2 bg-red-600 hover:bg-red-800 text-white rounded-full font-bold cursor-pointer"
              onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
