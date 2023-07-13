let firstName = document.querySelector('#first-name');
let firstNameErrorMessage = document.querySelector('#name-error-message');

let phoneNumber = document.querySelector('#phone-number')
let phoneNumberErrorMessage = document.querySelector('#phone-number-error-message');

//reveals error message
firstName.addEventListener('change', (e) => {
    console.log(e.target.value)
    if (/[a - zA - Z]+/.test(e.target.value) && e.target.value.length < 2) {
        firstNameErrorMessage.style.visibility = 'visible';
    }
})

phoneNumber.addEventListener('change', (e) => {
    if (!/\d{3}[\-]\d{3}[\-]\d{4}/.test(e.target.value)) {
        phoneNumberErrorMessage.style.visibility = 'visible';
    }
})