import axios from 'axios';

const API_KEY = '51394947-9bb14754823a2b1072a733c4f';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios(BASE_URL, { params })
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.error('Помилка запиту:', error.message);
    });
}
