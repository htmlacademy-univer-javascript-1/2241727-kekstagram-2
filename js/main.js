// Функция взята из источника и доработана: https://learnjs.ru/lessons/math-random/?ysclid=lj19va18kc123768048

function getRandomPositiveNumber(a, b) {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
}


getRandomPositiveNumber(2,10);

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength(30, 50);
