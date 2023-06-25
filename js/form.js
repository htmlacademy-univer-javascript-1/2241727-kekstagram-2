import {getCloseListers, trimField, stopPropagation} from './util.js';
import {validator} from './hashtag-valid.js';
import {addSliderListeners, deleteSliderListeners} from './slider.js';
import {sendForm} from './api.js';
import {showErrorSection, showSuccessSection} from './message.js';

const overlay = document.querySelector('.img-upload__overlay');
const img = overlay.querySelector('img');
const form = document.querySelector('#upload-select-image');
const closeButton = overlay.querySelector('#upload-cancel');
const hashtagField = form.querySelector('.text__hashtags');
const descField = form.querySelector('.text__description');
const [closeForm, closeEscape] = getCloseListers(overlay, closeButton, clearForm);
const scale = form.querySelector('.scale__control--value');
const scaleControls = form.querySelectorAll('button.scale__control');

const scaleValueMin = 25;
const scaleValueMax = 100;

const trimFieldOnChange = (ev) => trimField(ev.target);
//const stopPropagation = (ev) => ev.stopPropagation();

function submitForm(ev) {
  ev.preventDefault();
  if (!validator.validate()) {
    return;
  }
  sendForm(new FormData(ev.target))
    .then((r) => r.json())
    .then(() => showSuccessSection())
    .then(() => closeForm())
    .catch(() => showErrorSection());
}

function changeScale(ev) {
  const newVal = +(scale.value.slice(0, -1)) + +ev.target.dataset.delta;
  if (newVal >= scaleValueMin && newVal <= scaleValueMax) {
    img.classList.remove(`scale-${scale.value.slice(0, -1)}`);
    scale.value = `${newVal}%`;
    img.classList.add(`scale-${newVal}`);
  }
}

function clearForm() {
  form.reset();
  scaleControls.forEach((ctrl) => {
    ctrl.removeEventListener('click', changeScale);
  });
  deleteSliderListeners();
  form.removeEventListener('submit', submitForm);
  hashtagField.removeEventListener('change', trimFieldOnChange);
  hashtagField.removeEventListener('keydown', stopPropagation);
  descField.removeEventListener('change', trimFieldOnChange);
  descField.removeEventListener('keydown', stopPropagation);
  img.className = 'scale-100';
}

export function showFileForm() {
  form.addEventListener('submit', submitForm);
  scaleControls.forEach((ctrl) => {
    ctrl.addEventListener('click', changeScale);
  });
  addSliderListeners();
  hashtagField.addEventListener('change', trimFieldOnChange);
  hashtagField.addEventListener('keydown', stopPropagation);
  descField.addEventListener('change', trimFieldOnChange);
  descField.addEventListener('keydown', stopPropagation);
  closeButton.addEventListener('click', closeForm);
  document.body.addEventListener('keydown', closeEscape);
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-prioritise-1');
  document.body.classList.add('modal-open');
}
