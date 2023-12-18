const FEEDBACK_KEY = 'feedback-form-state';
const EMAIL_KEY = 'feedback-form-email';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const input = form.querySelector('input');

const message = localStorage.getItem(FEEDBACK_KEY);
const email = localStorage.getItem(EMAIL_KEY);

if (message) {
  textarea.value = message;
  input.value = email;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(FEEDBACK_KEY);
  localStorage.removeItem(EMAIL_KEY);
  form.reset();
});

input.addEventListener('input', event => {
  const msg = event.target.value;
  localStorage.setItem(EMAIL_KEY, msg);
});

textarea.addEventListener('input', event => {
  const msg = event.target.value;
  localStorage.setItem(FEEDBACK_KEY, msg);
});
