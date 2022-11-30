import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductInfo = () => {
  const { state } = useLocation();

  return (
    <div className=" w-full min-h-screen relative flex justify-center items-center  md:px-10 2xl:px-72 bg-emerald-500">
      <div className="w-full h-full flex flex-col justify-center items-center text-center pt-16 pb-32 text-neutral-100 px-10 sm:px-16">
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            duration: 1,
            delay: 0.3,
            bounce: 0.3
          }}
        >
          <div className="flex flex-col items-center justify-center gap-2 ">
            <img
              src={state.image}
              alt=""
              className="rounded-3xl max-w-[20rem]"
            />

            <h1 className=" pt-4 text-3xl font-bold items-center">
              {state.title}
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            duration: 1,
            delay: 0.5,
            bounce: 0.3
          }}
        >
          <div className="pt-6 font-semibold">
            {state.kitchen.length > 0 && (
              <>
                <h3 className="text-2xl font-semibold text-yellow-300">
                  Cuisine
                </h3>
                <p>{state.kitchen.join(', ')}</p>
              </>
            )}
            {state.diet.length > 0 && (
              <>
                <h3 className="text-2xl font-semibold text-yellow-300 mt-4 ">
                  Diets
                </h3>
                <p>{state.diet.join(', ')}</p>
              </>
            )}
            {state.ingredients && (
              <>
                <h2 className="text-2xl  mt-4 text-yellow-300">Ingredients</h2>
                <h3>{state.ingredients.join('  ')}</h3>
              </>
            )}

            <h3 className="text-2xl font-semibold mt-4 text-yellow-300">
              Cooking process
            </h3>
            <h5>
              Ready in:
              <span className="text-amber-400"> {state.baking} min</span>
            </h5>
            {state.recipe.map((item, index) => {
              return (
                <h2 className="p-2" key={index}>
                  <span className="text-yellow-300">{index + 1}.</span> {item}
                </h2>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductInfo;
