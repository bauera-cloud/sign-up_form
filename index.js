let firstName = document.querySelector("input[id='first-name'");
let firstNameErrorMessage = document.querySelector('#name-error-message');

let lastName = document.querySelector("input[id='last-name'");
let lastNameErrorMessage = document.querySelector('#last-name-error-message');

let phoneNumber = document.querySelector("input[id='phone-number'");
let phoneNumberErrorMessage = document.querySelector('#phone-number-error-message');

let password = document.querySelector("input[id='password'");
let passwordErrorMessage = document.querySelector('#password-error-message');

//reveals error message
firstName.addEventListener('blur', (e) => {
    if (/[a - zA - Z]+/.test(e.target.value) && e.target.value.length < 2) {
        firstNameErrorMessage.style.visibility = 'visible';
    }
})

firstName.addEventListener('focus', (e) => {
    if (firstNameErrorMessage.checkVisibility() === true) {
        firstNameErrorMessage.style.visibility = 'hidden';
    }
})

lastName.addEventListener('blur', (e) => {
    if (/[a - zA - Z]+/.test(e.target.value) && e.target.value.length < 2) {
        lastNameErrorMessage.style.visibility = 'visible';
    }
})

lastName.addEventListener('focus', (e) => {
    if (lastNameErrorMessage.checkVisibility() === true) {
        lastNameErrorMessage.style.visibility = 'hidden';
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

//error in console: caught SyntaxError: Invalid regular expression: Invalid Group
// password.addEventListener('blur', (e) => {
//     if (!/(?=^.{ 8, }$)((?=.*\d) | (?=.*\W +)) (? ![.\n])(?=.* [A - Z])(?=.* [a - z]).*$/.test(e.target.value)) {
//         passwordErrorMessage.style.visibility = 'visible';
//     }
// })

password.addEventListener('focus', (e) => {
    if (passwordErrorMessage.checkVisibility() === true) {
        passwordErrorMessage.style.visibility = 'hidden';
    }
})

//error for confirm password needs to be added to this file, html, and css.

