import {CreatePictures} from './data.js';

const pictureTemplate = document.querySelector('#picture');
const pictureContainer = document.querySelector('.pictures');

const similarPictures = CreatePictures();
const pictureListFragment = document.createDocumentFragment();

similarPictures.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureListFragment.appendChild(pictureElement);
});

pictureContainer.appendChild(pictureListFragment);
