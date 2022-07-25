import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea: document.querySelector('textarea')
};
 refs.form.addEventListener('submit', onSubmitClick);
refs.form.addEventListener('input', throttle(inFormInput, 500));
refs.email.addEventListener('focus', onFormClick)
refs.textarea.addEventListener('focus', onFormClick)
const FEEDBACK = 'feedback-form-state';
const formInput = {};
refs.email = "";
refs.textarea = "";

function inFormInput(evt) {

    formInput[evt.target.name] = evt.target.value;
    localStorage.setItem("FEEDBACK", JSON.stringify(formInput))

}

function onSubmitClick(evt) {
    const saveMessage = JSON.parse(localStorage.getItem("FEEDBACK"));
    console.log(saveMessage.email);
    console.log(saveMessage.message);
        evt.target.reset();
        console.log(evt);
        localStorage.removeItem("FEEDBACK");
    }

function onFormClick(evt) {
    const saveMessage = JSON.parse(localStorage.getItem("FEEDBACK"));
    console.log(saveMessage);
    if (saveMessage) {
        refs.email.value = saveMessage.email,
            refs.textarea.value = saveMessage.message
    
    }
}