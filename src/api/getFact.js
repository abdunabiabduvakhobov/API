const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': 'numbersapi.p.rapidapi.com'

    }
  };

  const baseUrl = import.meta.env.VITE_BASE_URL;
  

export const getFact = async (url) => {
    try {
        const response = await fetch(`${baseUrl}${url}?json=true`, options);
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(error);
      }
}


