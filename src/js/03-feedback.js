import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector(".feedback-form input[name='email']"),
  message: document.querySelector(".feedback-form textarea[name='message']"),
};
const EMAIL_KEY = 'email';
const MESSAGE_KEY = 'message';

emailValue();
messageValue();

refs.form.addEventListener('submit', formSubmit);
refs.email.addEventListener('input', throttle(emailInput, 500));
refs.message.addEventListener('input', throttle(messageInput, 500));

function formSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.clear();
}

function emailInput(e) {
  const value = e.target.value;
  localStorage.setItem(EMAIL_KEY, value);

  console.log(value);
}

function messageInput(e) {
  const value = e.target.value;
  localStorage.setItem(MESSAGE_KEY, value);

  console.log(value);
}

function emailValue() {
  const savedEmail = localStorage.getItem(EMAIL_KEY);
  if (savedEmail) {
    refs.email.value = savedEmail;
  }
}

function messageValue() {
  const savedMessage = localStorage.getItem(MESSAGE_KEY);
  if (savedMessage) {
    refs.message.value = savedMessage;
  }
}
