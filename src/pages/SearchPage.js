import React, { useEffect } from 'react';
import RenderList from '../Components/RenderList';
import SearchForm from '../Components/SearchForm';
import { useGlobalContext } from '../context';
import Wallpaper from '../Components/Wallpaper';
import { motion } from 'framer-motion';

const Test = () => {
  const { data } = useGlobalContext();
  const { setNav, error } = useGlobalContext();

  useEffect(() => {
    setNav(false);
  }, [setNav]);

  const heightConditional =
    data.length > 0
      ? 'min-h-screen w-full relative flex justify-center items-center block'
      : 'h-[90vh] w-full relative flex justify-center items-center';

  return (
    <div className={heightConditional}>
      <Wallpaper />
      <div className="w-full h-full flex flex-col justify-start items-center text-center">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1, delay: 0.3, bounce: 0.3 }}
        >
          <div className=" w-full  text-white text-center pt-10 pb-2">
            <h1 className="text-5xl font-bold">
              Search you favorite{' '}
              <span className="text-yellow-300 font-semibold">Food</span>
            </h1>
            <h1 className="text-3xl py-2">and get back all our information</h1>
            <p className="py-4 text-lg">
              Type something in the search bar below
            </p>
          </div>
          <SearchForm />
        </motion.div>
        <RenderList />
        {error && (
          <h3 className="text-lg text-red-500 underline bg-white rounded-lg p-2">
            Failed to get data: {error.message}
          </h3>
        )}
        {data.length === 0 && (
          <h3 className="text-lg text-red-500 underline bg-white rounded-lg p-2">
            Failed to get data: no results match
          </h3>
        )}
      </div>
    </div>
  );
};

export default Test;
