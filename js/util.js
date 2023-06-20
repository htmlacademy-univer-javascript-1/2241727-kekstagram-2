// Функция взята из источника и доработана: https://learnjs.ru/lessons/math-random/?ysclid=lj19va18kc123768048

function getRandomPositiveNumber(a, b) {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
}

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength(30, 50);


//Функция взята с сайта: https://otus.ru/journal/generiruem-sluchajnye-chisla-v-javascript/?ysclid=lj4bo1r368990993308
//Возвращает случайное уникальное число
const getArrayOfUniqueNumbers = function (upper) {
  const numReserve = [];
  while (numReserve.length < upper) {
    const randomNumber = getRandomPositiveNumber(1, upper);
    let found = false;
    for (let i=0; i < numReserve.length; i++) {
      if (numReserve[i] === randomNumber) {
        found = true;
        break;
      }
    }
    if (!found) {numReserve[numReserve.length]=randomNumber;}
  }
  return numReserve;
};

export {getRandomPositiveNumber, getArrayOfUniqueNumbers};
