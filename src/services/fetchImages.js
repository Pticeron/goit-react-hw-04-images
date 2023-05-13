// const API_KEY = '34615621-fecaa10f9eea33d0198f958f8';
// const BASE_URL = 'https://pixabay.com/api/';
// const PICS_ON_PAGE = 12;
import axios from 'axios';

export const fetchImages = async (query, page) => {
  const response = await axios.get(`https://pixabay.com/api/`, {
    method: 'get',
    params: {
      key: '34615621-fecaa10f9eea33d0198f958f8',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });

  return response.data;
};


