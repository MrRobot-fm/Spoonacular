import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import foodVideo from '../assets/video/Verde e Verde Lime Incentrato sul Cibo Cucina Intro di YouTube (1).mp4';
import { motion } from 'framer-motion';
import { useGlobalContext } from '../context';

const Home = () => {
  const { setNav, error } = useGlobalContext();
  useEffect(() => {
    setNav(false);
  }, [setNav]);

  return (
    <div className="relative flex flex-col w-full min-h-screen ">
      <div className="w-full  h-[90vh] ">
        <video
          src={foodVideo}
          autoPlay
          loop
          muted
          className="object-cover h-full w-full absolute -z-10"
        />
        <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
          <motion.div
            animate={{
              x: 0,
              opacity: 1
            }}
            initial={{ x: -500, opacity: 0 }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: 0.3,
              bounce: 0.3
            }}
          >
            <h1 className="text-5xl font-bold">Spoonacular Projects3</h1>
            <h1 className="py-2 text-3xl">
              <span className="text-yellow-300 font-semibold">Vegetarian </span>
              food search engine
            </h1>
            <p className="text-xl py-4">
              All about the food world, get your idea whit us
            </p>
            <div>
              <button className="m-2  p-3 rounded-lg shadow-xl bg-emerald-500 hover:bg-emerald-400 hover:scale-105 hover:transition-all">
                <Link to="/search">Get here</Link>
              </button>
            </div>
          </motion.div>

          {/* Error message */}
          {error && (
            <h3 className="text-lg text-red-500 underline bg-white rounded-lg p-2 shadow-lg">
              {' '}
              Failed to get data: {error.message}
            </h3>
          )}
        </div>

        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 500, opacity: 0 }}
          transition={{
            type: 'spring',
            duration: 1,
            bounce: 0.3,
            delay: 0.5
          }}
        >
          <p className="text-center text-white text-lg font-medium ">
            Total Volume: Ingredients{' '}
            <span className="text-yellow-300">2600+</span> , Recipes{' '}
            <span className="text-yellow-300">5000+</span> , Products{' '}
            <span className="text-yellow-300"> 600K</span>, Menù items{' '}
            <span className="text-yellow-300">115K</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
