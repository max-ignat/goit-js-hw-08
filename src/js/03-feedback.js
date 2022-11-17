import throttle from 'lodash.throttle';

const form = document.querySelector('form');

const input = document.querySelector('input');

const text = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(saveDataToStorage, 500));
form.addEventListener('submit', onFormSubmit);

getData();

function saveDataToStorage() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

function onFormSubmit(event) {

    if (form.value === '' || text.value === ''){
        return alert(' feel up all form!');}
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function getData(event) {
  const dataFromStorage = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(dataFromStorage);

  if (dataFromStorage) {
    input.value = parsedData.email || '';
    text.value = parsedData.message || '';
  }
}
