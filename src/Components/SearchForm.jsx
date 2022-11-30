import React from 'react';
import { useGlobalContext } from '../context';
import SearchOutlined from '@mui/icons-material/SearchOutlined';

const SearchForm = () => {
  const { setSearch, query, setQuery } = useGlobalContext();

  const handleSubmit = e => {
    e.preventDefault();

    setSearch(query);
    e.target.reset();
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div className="flex items-center justify-center bg-white  rounded-lg">
        <form type="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            className="p-3 rounded-2xl text-md outline-none text-slate-500 placeholder-slate-500"
            onChange={handleChange}
            required
            minLength={3}
          />
          <SearchOutlined className="mr-2 text-slate-500" />
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
