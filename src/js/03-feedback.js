import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.mail');
const text = document.querySelector('.text')


form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const { elements: {email, message} } = event.currentTarget;
      console.log(`Email: ${email.value}, Message: ${message.value}`);
    }

    const onEmailInput = (event) => {
        const formState = JSON.parse(localStorage.getItem('feedback-form-state')) 
        localStorage.setItem('feedback-form-state', JSON.stringify({...formState, email: event.currentTarget.value }));

    }

    email.addEventListener("input", throttle(onEmailInput, 500));

    const onTextInput = (event) => {
        const formState = JSON.parse(localStorage.getItem('feedback-form-state')) 
        localStorage.setItem('feedback-form-state', JSON.stringify({...formState, text: event.currentTarget.value }));
    }

    text.addEventListener("input", throttle(onTextInput, 500));
