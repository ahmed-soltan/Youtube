import axios from 'axios';

const API_KEY = 'b7375562d8msh8fa0e845967f567p1960c1jsna9d73ea08d58'; // Replace with your actual API key
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'; // Replace with your actual API key

export const fetchFromAPI = async (url) => {
    // Make a GET request to the YouTube Data API search endpoint
    const response = await axios.get(`${BASE_URL}/${url}`, {
      params: {
        part: 'snippet,id',
        regionCode: 'US',
        maxResults: '50',
        order: 'date'
        },
        headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    });

  try {
  console.log(response.data);
  return response.data.items;
  } catch (error) {
  console.error(error);
  }
}


// Usage example


