

function getRandomPositiveNumber(a, b) {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveNumber(0, elements.length - 1)];

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength(30, 50);

function getCloseListers(modal, closeButton, callback){
  const closeOnEscape = (ev) => document.body.classList.toString().split(' ')
    .filter((p) => p.startsWith('modal-prioritise'))
    .map((p) => +p.slice(17))
    .filter((p) => p > 1).length === 0 &&
    ev.key === 'Escape' && closeModal();
  function closeModal(){
    if (callback){
      callback();
    }
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.body.classList.remove('modal-prioritise-1');
    document.removeEventListener('keydown', closeOnEscape);
    closeButton.removeEventListener('click', closeModal);
  }
  return [closeModal, closeOnEscape];
}


export {getRandomPositiveNumber, createRandomIdFromRangeGenerator, getRandomArrayElement, checkStringLength, getCloseListers};
