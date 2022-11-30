import React from 'react';
import foodVideo2 from '../assets/video/Verde e Verde Lime Incentrato sul Cibo Cucina Intro di YouTube (2).mp4';

const Wallpaper = () => {
  return (
    <>
      <video
        src={foodVideo2}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />
    </>
  );
};

export default Wallpaper;
