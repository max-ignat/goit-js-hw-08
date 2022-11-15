import throttle from 'lodash.throttle';
const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const textEl = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';




// const onInputChange = (event) => {
//     localStorage.setItem('feedback-form-state', event.elements.currentTarget.value);
// };

// const formData = {
//     mail,
//     message,
//     };
//     console.log(formData);
//     form.reset();

form.addEventListener('input', throttle(setDataToStorage, 500));
form.addEventListener('submit', onSubmit);

