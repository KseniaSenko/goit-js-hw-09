const Refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}
const { form, input, textarea } = Refs;
const localSorageKey = "feedback-form-state";

form.addEventListener('input', onInputTargetValue);
form.addEventListener('submit', onBtnClick);

const storageValue = localStorage.getItem(localSorageKey);
const parsedStorageValue = JSON.parse(storageValue);

if (storageValue) {
    input.value = parsedStorageValue.email;
    textarea.value = parsedStorageValue.message;
}

function onInputTargetValue() {
    const formValue = {
        email: input.value,
        message: textarea.value,
    };
    localStorage.setItem(localSorageKey, JSON.stringify(formValue));   
}

function onBtnClick(event) {
    event.preventDefault();
    if (input.value === '' || textarea.value === '') {
        return alert('Please fill in all  the fields!')
    }
    if (storageValue) {
        console.log(parsedStorageValue)
    }

    localStorage.removeItem(localSorageKey);
    form.reset();
}
