import throttle from 'lodash.throttle';
import storage from './storage.js';

const LOCAL_KEY = 'feedback-form-state';

const formInput = document.querySelector('.feedback-form');

formInput.addEventListener('input', throttle(onInputData, 500));
formInput.addEventListener('submit', onFormSubmit);

let dataForm = storage.load(LOCAL_KEY)

const { email, message } = formInput.elements;
reloadPage();

function onInputData() {
    dataForm = { email: email.value, message: message.value };
    storage.save(LOCAL_KEY, dataForm)

}

function reloadPage() {
    if (dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    // console.log({ email: email.value, message: message.value });

    if (email.value === '' || message.value === '') {
        return alert('Please fill in all the fields!');
    }
    console.log({ email: email.value, message: message.value });

    // debugger

    storage.remove(LOCAL_KEY)

    event.currentTarget.reset();
    dataForm = {};
}
