import axios from 'axios'


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
 
  params: {
    // q: 'New',
    // part: 'snippet,id',
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'a58c769d0cmsh0132917213024a4p17800ajsnd9e96ebcf045',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


  export const fetchFromAPI = async(url) => {
    const response = await axios.request(`${BASE_URL}/${url}`, options);
   return response.data;
  }
  