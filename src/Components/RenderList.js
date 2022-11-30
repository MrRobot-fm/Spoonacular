import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import SingleCard from './Card';
import { clientApi } from '../clientApi';

const RenderList = () => {
  const { data, setData, search, setError } = useGlobalContext();

  useEffect(() => {
    clientApi(search, setData, setError);
  }, [search, setData, setError]);

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
              kitchen={cuisines}
              recipe={steps}
              baking={readyInMinutes}
              diet={diets}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RenderList;
