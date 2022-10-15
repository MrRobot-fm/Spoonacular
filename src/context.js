import { useEffect, useState, useContext, createContext } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('spinach');
  const [nav, setNav] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.spoonacular.com/recipes/complexSearch?&query=${search}&apiKey=${process.env.REACT_APP_API_KEY}&addRecipeInformation=true&diet=vegetarian&number=8`;

        const response = await axios(url, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setData(response.data.results);

        console.log(response);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };

    fetchData();
  }, [search]);
  console.log(data);

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
