import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
const STORAGE_KEY = 'feedback-form-state';
let savedItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  email: '',
  message: '',
};
recordTextInput();
function onFormInput(event) {
  savedItems[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems));
}
function onFormSubmit(event) {
  event.preventDefault();
  if (!event.target.email.value || !event.target.message.value)  {
    alert ('cell must be filled!')
    return;
  } 
const formState = localStorage.getItem(STORAGE_KEY);
console.log(JSON.parse(formState));
event.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
savedItems = { email: '', message: '' };
}
function recordTextInput() {
   
        form.email.value = savedItems.email;
        form.message.value = savedItems.message;
      
}
