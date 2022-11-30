import { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('spinach');
  const [nav, setNav] = useState(false);
  const [error, setError] = useState('');

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        query,
        setQuery,
        search,
        setSearch,
        nav,
        setNav,
        error,
        setError
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
