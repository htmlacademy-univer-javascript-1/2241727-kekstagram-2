import {getRandomPositiveNumber, getArrayOfUniqueNumbers} from './util.js';

const PICTURES_MAX_RANGE = 25;

const LIKES_MIN_RANGE = 15;
const LIKES_MAX_RANGE = 200;

const COMMENTS_MIN_RANGE = 1;
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

const getCommentsData = function (number) {
  const comments = [];
  const getIdComment = getArrayOfUniqueNumbers(200);

  for (let i = 0; i <= number; i++) {
    const message = MESSAGES[getRandomPositiveNumber(0, MESSAGES.length - 1)];
    const comment = {
      id: getIdComment[i],
      avatar: `img/avatar-${  getRandomPositiveNumber(COMMENTS_MIN_RANGE, COMMENTS_MAX_RANGE)  }.svg`,
      message: message,
      name: NAMES[getRandomPositiveNumber(0, NAMES.length - 1)]
    };

    comments.push(comment);
  }

  return comments;
};

const getPicturesData = function (number) {
  const arrayOfUniqueNumbers = getArrayOfUniqueNumbers(number);
  const pictures = [];

  for (let i = 0; i < number; i++) {
    const description = DESCRIPTIONS[getRandomPositiveNumber(0, DESCRIPTIONS.length-1)];
    const picture = {
      id: arrayOfUniqueNumbers[i],
      url: `photos/${  arrayOfUniqueNumbers[i]  }.jpg`,
      description: description,
      likes: getRandomPositiveNumber(LIKES_MIN_RANGE, LIKES_MAX_RANGE),
      comments: getCommentsData(getRandomPositiveNumber(COMMENTS_MIN_RANGE, COMMENTS_MAX_RANGE))
    };

    pictures.push(picture);
  }

  return pictures;
};

const similarPictures = getPicturesData(PICTURES_MAX_RANGE);

similarPictures();
