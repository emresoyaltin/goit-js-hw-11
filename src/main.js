import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const input = form.elements['search-text'];
  const query = input.value.trim();

  if (query === '') {
    iziToast.warning({
      message: `Please enter a search query!`,
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      hideLoader();

      if (!data.hits.length) {
        iziToast.warning({
          message: `Sorry, there are no images matching your search query. Please, try again!`,
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
      form.reset();
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        message: `Something went wrong: ${error.message}`,
        position: 'topRight',
      });
    });
});
