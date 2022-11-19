import React from 'react';

import { IMovieTypes } from '../types';

import { motion } from '../framer-motion';

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
      <div className="absolute p-8 max-w-screen-sm md:max-w-[80%] lg:max-w-[60%] w-full max-h-[80%] md:max-h-[60%] h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-65%] md:translate-y-[-50%] z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.2 } }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col md:h-full md:flex-row bg-[#121924] rounded-3xl space-x-2">
          <div className="flex flex-[1] w-full">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.4,
              }}
              className="object-cover rounded-3xl"
              src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path}
              alt=""></motion.img>
          </div>
          <div className="flex flex-col min-h-[24rem] bg-[#121924] flex-1 rounded-3xl p-8 justify-between">
            <div className="space-y-8">
              <h2 className="text-3xl">{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
            <div>
              <button
                className="mt-8 md:mt-0 w-full px-4 py-2 bg-red-600 hover:bg-red-800 text-white rounded-full font-bold cursor-pointer"
                onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className="absolute w-full h-full bg-black bg-opacity-80 z-auto"
        onClick={toggleModal}></motion.div>
    </motion.div>
  );
};

export default Modal;
