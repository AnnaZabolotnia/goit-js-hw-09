const form = document.querySelector('form');
const emailField = document.querySelector('input');
const messageField = document.querySelector('textarea');

let toSave = localStorage.getItem('feedback-form-state');
if (toSave) {
  toSave = JSON.parse(toSave);
  if (toSave.email && toSave.message) {
    emailField.value = toSave.email;
    messageField.value = toSave.message;
  } else {
    localStorage.removeItem('feedback-form-state');
    toSave = {
      email: '',
      message: '',
    };
  }
} else {
  toSave = {
    email: '',
    message: '',
  };
}

form.addEventListener('input', e => {
  const name = e.target.name;
  const value = e.target.value.trim();

  if (name === 'email') {
    toSave.email = value;
  } else if (name === 'message') {
    toSave.message = value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(toSave));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (toSave.email && toSave.message) {
    console.log('submit', toSave);
    emailField.value = '';
    messageField.value = '';
    toSave = {
      email: '',
      message: '',
    };
    localStorage.removeItem('feedback-form-state');
  } else {
    console.log('Error');
  }
});
