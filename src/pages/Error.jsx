import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="flex items-center justify-center bg-emerald-500">
      <div className="h-[90vh] w-full flex flex-col items-center justify-center text-3xl">
        <h1 className="capitalize">oops! page not found!⛔</h1>
        <button className="md:hidden m-2 p-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 hover:scale-105 hover:transition-all text-slate-600 text-xl">
          <Link to="/">Back home</Link>
        </button>
      </div>
    </section>
  );
};

export default Error;
