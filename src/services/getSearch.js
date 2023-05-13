const API_KEY = '34615621-fecaa10f9eea33d0198f958f8';
const BASE_URL = 'https://pixabay.com/api/';
const PICS_ON_PAGE = 12;


export const getSearch = (searchText, page) => {
  const params = new URLSearchParams({
    q: searchText,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PICS_ON_PAGE,
  });

  return fetch(`${BASE_URL}?${params}`);
};





