import {
  useEffect,
  useState,
  useCallback,
  useContext,
  createContext
} from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('spinach');
  const [nav, setNav] = useState(false);
  const [error, setError] = useState('');

  const fetchData = useCallback(async () => {
    try {
      const url = `https://api.spoonacular.com/recipes/complexSearch?&query=${search}&apiKey=${process.env.REACT_APP_API_KEY}&addRecipeInformation=true&diet=vegetarian&number=8`;

      const response = await axios(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setData(response.data.results);
    } catch (error) {
      setError(error);
    }
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [fetchData, search]);

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
