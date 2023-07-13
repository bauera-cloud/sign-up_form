let firstName = document.querySelector("input[id='first-name'");
let firstNameErrorMessage = document.querySelector('#name-error-message');

let phoneNumber = document.querySelector("input[id='phone-number'");
let phoneNumberErrorMessage = document.querySelector('#phone-number-error-message');

//reveals error message
firstName.addEventListener('blur', (e) => {
    console.log(e.target.value)
    if (/[a - zA - Z]+/.test(e.target.value) && e.target.value.length < 2) {
        firstNameErrorMessage.style.visibility = 'visible';
    }
})

firstName.addEventListener('focus', (e) => {
    if (firstNameErrorMessage.checkVisibility() === true) {
        firstNameErrorMessage.style.visibility = 'hidden';
    }
})


phoneNumber.addEventListener('blur', (e) => {
    if (!/\d{3}[\-]\d{3}[\-]\d{4}/.test(e.target.value)) {
        phoneNumberErrorMessage.style.visibility = 'visible';
    }
})

phoneNumber.addEventListener('focus', (e) => {
    if (phoneNumberErrorMessage.checkVisibility() === true) {
        phoneNumberErrorMessage.style.visibility = 'hidden';
    }
})