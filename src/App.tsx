import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Filter from './components/Filter';
import Skeleton from './components/Skeleton';

import { motion, AnimatePresence } from './framer-motion';

import { IMovieTypes } from './types';

const App: React.FC = () => {
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetchPopular();
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const [loading, setLoading] = useState<boolean>(true);
  const [popular, setPopular] = useState<IMovieTypes[]>([]);
  const [filtered, setFiltered] = useState<IMovieTypes[]>([]);
  const [activeGenre, setActiveGenre] = useState<number>(0);

  const fetchPopular = async () => {
    const api_key: string = process.env.REACT_APP_API_KEY || '';
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    );
    const movies = await res.json();
    setPopular(movies.results);
    setFiltered(movies.results);
    setLoading(false);
  };

  return (
    <div className="max-w-7xl lg:m-auto lg:p-8 m-8 space-y-8">
      <h1 className="text-7xl font-bold mb-8 font-DMSans">Trending now</h1>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="grid md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
        <AnimatePresence>
          {!loading
            ? filtered?.map((movie: IMovieTypes) => {
                return <Movie key={movie.id} movie={movie} />;
              })
            : [...Array(10)].map((movie: number, index: number) => {
                return <Skeleton key={index} />;
              })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;
