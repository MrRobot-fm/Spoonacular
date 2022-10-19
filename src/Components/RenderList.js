import React from 'react';
import { useGlobalContext } from '../context';
import SingleCard from './Card';

const RenderList = () => {
  const { data } = useGlobalContext();
  return (
    <div className="w-full pt-16 pb-36">
      <div className="w-full flex flex-wrap justify-center items-center  2xl:px-28">
        {data.map((item, index) => {
          const {
            id,
            title,
            image,
            summary,
            cuisines,
            readyInMinutes,
            diets,

            analyzedInstructions: {
              0: { steps }
            }
          } = item;

          return (
            <SingleCard
              index={index}
              key={id}
              title={title}
              image={image}
              summary={summary}
              id={id}
              cucina={cuisines}
              ricetta={steps}
              cottura={readyInMinutes}
              dieta={diets}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RenderList;
