import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    mail: document.querySelector('input'),
    textarea: document.querySelector('textarea')
};
 refs.form.addEventListener('submit', onSubmitClick);
refs.form.addEventListener('input', throttle(inFormInput, 500));
// window.addEventListener('click', onFormClick)
const FEEDBACK = 'feedback-form-state';
const formInput = {};


function inFormInput(evt) {
    // refs.mail = "";
    // refs.textarea =""; 
    formInput[evt.target.name] = evt.target.value;
    localStorage.setItem(FEEDBACK, JSON.stringify(formInput))

}

function onSubmitClick(evt) {
    const savedData = JSON.parse(localStorage.getItem(FEEDBACK));
    console.log(savedData);
        evt.target.reset();
    localStorage.removeItem(FEEDBACK);
    return savedData;
}

if (localStorage.getItem(FEEDBACK)) {
    const saveMessage = JSON.parse(localStorage.getItem(FEEDBACK));
    const savedDataMail = saveMessage.email ? saveMessage.email : "";
    refs.mail.value = savedDataMail;
    const savedDataMessage = saveMessage.message ? saveMessage.message : "";
    refs.textarea.value = savedDataMessage;
}