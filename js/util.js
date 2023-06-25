

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

export function useOnEscape(elem, callback, prioritise) {

  const action = (ev) => document.body.classList.toString().split(' ')
    .filter((p) => p.startsWith('modal-prioritise'))
    .map((p) => +p.slice(17))
    .filter((p) => p > prioritise).length === 0 &&
    ev.key === 'Escape' &&
    callback();
  const setEvent = () => {
    document.addEventListener('keydown', action);
    document.body.classList.add(`modal-prioritise-${prioritise}`);
  };
  const removeEvent = () => {
    document.removeEventListener('keydown', action);
    setTimeout(() => document.body.classList.remove(`modal-prioritise-${prioritise}`), 300);
  };
  return [setEvent, removeEvent];
}


function trimField(field) {
  field.value = field.value.trimEnd();
}

function stopPropagation(ev) {
  ev.stopPropagation();
}

export function transformFromHundredProcent(value, max, min, fixed) {
  return ((value / 100) * (max - min) + min).toFixed(fixed);
}

export function useCloseOnClickOutside(curElem, action) {
  const setEvent = () => {
    document.addEventListener('click', action);
    curElem.addEventListener('click', stopPropagation);
  };
  const removeEvent = () => {
    document.removeEventListener('click', action);
    curElem.removeEventListener('click', stopPropagation);
  };
  return [setEvent, removeEvent];
}

export function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {getRandomPositiveNumber, createRandomIdFromRangeGenerator, getRandomArrayElement, checkStringLength, getCloseListers, trimField, stopPropagation};
