const form = document.querySelector('form');

const emailField = document.querySelector('input');
const messageField = document.querySelector('textarea');

let toSave = localStorage.getItem('feedback-form-state');
if (toSave) {
  toSave = JSON.parse(toSave);
  emailField.value = toSave.email;
  messageField.value = toSave.message;
} else {
  toSave = {
    email: '',
    message: '',
  };
}

form.addEventListener('input', e => {
  const name = e.target.name;
  const value = e.target.value;

  if (name === 'email') {
    toSave.email = value;
  } else if (name === 'message') {
    toSave.message = value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(toSave));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('submit', toSave);
  emailField.value = '';
  messageField.value = '';
  toSave = {
    email: '',
    message: '',
  };
  localStorage.removeItem('feedback-form-state');
});
