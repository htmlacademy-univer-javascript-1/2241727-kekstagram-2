import {getRandomPositiveNumber, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

const PICTURES_MAX_RANGE = 25;

const LIKES_MIN_RANGE = 15;
const LIKES_MAX_RANGE = 200;

const COMMENTS_MAX_RANGE = 6;

const DESCRIPTIONS = [
  'Зима',
  'Весна',
  'Лето',
  'Осень',
  'Море',
  'Лес',
];


const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Светлана',
  'Григорий',
  'Вячеслав',
  'Анатолий',
  'Евгения',
  'Александра',
  'Ульяна',
];

const generatePhotoId = createRandomIdFromRangeGenerator(0, PICTURES_MAX_RANGE);
const generateUrl = createRandomIdFromRangeGenerator(0, PICTURES_MAX_RANGE);
const generateCommentId = createRandomIdFromRangeGenerator(1, 1000);


const getCommentData = function () {
  return  {
    id: generateCommentId (),
    avatar: getRandomPositiveNumber(1 ,6),
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
};


const getPictureData = function () {
  const comments = Array.from({length: getRandomPositiveNumber(1,COMMENTS_MAX_RANGE)}, getCommentData);
  return {
    id: generatePhotoId(),
    url: generateUrl(),
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveNumber(LIKES_MIN_RANGE, LIKES_MAX_RANGE),
    comments: comments,
  };
};

const CreatePictures = () => Array.from({length: PICTURES_MAX_RANGE}, getPictureData);
export {CreatePictures};
