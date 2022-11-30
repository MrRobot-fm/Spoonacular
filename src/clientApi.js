import axios from 'axios';

export const clientApi = async (search, setData, setError) => {
  try {
    const url = `https://api.spoonacular.com/recipes/complexSearch?&query=${search}&apiKey=${process.env.REACT_APP_API_KEY2}&addRecipeInformation=true&diet=vegetarian&number=8`;

    const response = await axios(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setData(response.data.results);
  } catch (error) {
    setError(error);
  }
};
