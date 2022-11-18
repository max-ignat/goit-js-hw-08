import throttle from 'lodash.throttle';

const form = document.querySelector('form');

const input = document.querySelector('input');

const text = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(saveDataToStorage, 500));
form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', getData);

getData();

function saveDataToStorage() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));

  
}

// function onFormSubmit(event) {
  
//     if (input.value === '' || text.value === ''){
//         return alert(' feel up all form!');}
//   event.preventDefault();
//   event.target.reset();
//   localStorage.removeItem(STORAGE_KEY);
  
  
// }

function onFormSubmit(event) {
  console.log({
    email: event.currentTarget.email.value,
    message: event.currentTarget.message.value
  });

    if (input.value === '' || text.value === ''){
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
  return dataFromStorage;
}


// const throttle = require("lodash.throttle");

// const refs = {
//   form: document.querySelector('.feedback-form'),
// };

// const LOCALSTORAGE_KEY = 'feedback-form-state';

// refs.form.addEventListener('input',throttle(onInputForm,500));
// refs.form.addEventListener('submit', onSubmitForm);
// // window.addEventListener('load', updateOutputOnload);

// function onInputForm(e) {
//   e.preventDefault();
//   const message = refs.form.elements.message.value;
//   const email = refs.form.elements.email.value;
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ message, email }));
  
// }

// function updateOutputOnload(e) {
//   e.preventDefault();
//   const outputTextContent = localStorage.getItem(LOCALSTORAGE_KEY);
//   const outputObjectContent = JSON.parse(outputTextContent)||{email:"", message:""};
//   const { email, message } = outputObjectContent;
//   refs.form.elements.email.value = email;
//   refs.form.elements.message.value = message;
// }

// function onSubmitForm(e) {
//   e.preventDefault();
//   const {
//     elements: { email, message },
//   } = e.currentTarget;
//   console.log({email:email.value, message:message.value})
//   localStorage.clear();
//   refs.form.reset();
// }