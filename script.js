const frontCard = document.getElementById('front-card');
const backCard = document.getElementById('back-card');
const leftSide = document.getElementById('left-side');
const userName = document.getElementById('name');
const nameError = document.getElementById('name-error');
const numberError = document.getElementById('number-error');
const number = document.getElementById('number');
const expDateMonth = document.getElementById('expDateMonth');
const expDateYear = document.getElementById('expDateYear');
const monthYearError = document.getElementById('month-year-error');
const cvc = document.getElementById('cvc');
const cvcError = document.getElementById('cvc-error');
const confirm = document.getElementById('confirm');
const numberCard = document.getElementById('number-card');
const cardHolderName = document.getElementById('card-holder-name');
const cardMonthYear = document.getElementById('card-month-year');
const cardCvc = document.getElementById('card-cvc');

let isMonthOk = false;


setImageBackground();
setDimensions();

function setDimensions() {
    const width = frontCard.offsetWidth;
    const height = frontCard.offsetHeight;
    backCard.style.width = width + 'px';
    backCard.style.height = height + 'px';
}

function setImageBackground() {
    const background = window.innerWidth > 760
        ? "url('images/bg-main-desktop.png')"
        : "url('images/bg-main-mobile.png')";
    leftSide.style.backgroundImage = background;
}


window.addEventListener('resize', () => {
    setImageBackground();
    setDimensions();
});

confirm.addEventListener('click', () => {
    const userName = getCorrectCardHolderName();
    const cardNumber = getCorrectCardNumber();
    const expDateMonth = getCorrectExpMonth();
    const expDateYear = getCorrectExpYear();
    const cvcNumber = getCorrectCvc();

    // format the number into 4 digits and gap
    if (cardNumber)
        numberCard.textContent = formatNumber(cardNumber);

    if (userName)
        cardHolderName.textContent = userName;

    // format the expiry date into MM/YY format
    if (expDateMonth && expDateYear)
        cardMonthYear.textContent = expDateMonth + '/' + expDateYear;

    if (cvcNumber)
        cardCvc.textContent = cvcNumber;

})

function getCorrectCardHolderName() {
    const inputValue = validateInput(nameError, userName);
    if (!inputValue) {
        return;
    }
    // check if the input is not less then four characters 
    if (inputValue.length <= 3) {
        showError(nameError, userName, 'Name should have at least 4 characters');
        return;
    }

    hideError(nameError, userName);
    return inputValue;
}


function getCorrectCardNumber() {
    const inputValue = validateInput(numberError, number);
    if (!inputValue) {
        return;
    }
    // check if the input is just a number
    const pattern = /^\d+$/
    if (!pattern.test(inputValue)) {
        showError(numberError, number, 'Wrong format, numbers only');
        return;
    }
    // check if the input length is exactly 16 digits
    if (inputValue.length != 16) {
        showError(numberError, number, 'Number should be exactly 16 digits');
        return;
    }

    hideError(numberError, number);
    return inputValue;
}

function getCorrectExpMonth() {
    const inputValue = validateInput(monthYearError, expDateMonth);
    if (!inputValue) {
        return;
    }
    // check if the input is just a number
    const pattern = /^\d+$/
    if (!pattern.test(inputValue)) {
        showError(monthYearError, expDateMonth, 'Numbers only');
        return;
    }
    // check if the input length is exactly 2 digits
    if (inputValue.length != 2) {
        showError(monthYearError, expDateMonth, '2 numbers only');
        return;
    }
    // check if the input length is bigger then 12 or equal o 0
    if (inputValue > 12 || inputValue === 0) {
        showError(monthYearError, expDateMonth, ' 0 < month > 12');
        return;
    }

    hideError(monthYearError, expDateMonth);
    isMonthOk = true;
    return inputValue;
}
function getCorrectExpYear() {
    const inputValue = validateInput(monthYearError, expDateYear);
    if (!inputValue) {
        return;
    }
    // check if the input is just a number
    const pattern = /^\d+$/
    if (!pattern.test(inputValue)) {
        showError(monthYearError, expDateYear, 'Numbers only');
        return;
    }
    // check if the input length is exactly 2 digits
    if (inputValue.length != 2) {
        showError(monthYearError, expDateYear, '2 numbers only');
        return;
    }
    // check if the input length is bigger or equal to this year
    if (inputValue < getYearTwoDigits()) {
        showError(monthYearError, expDateYear, 'bigger or equal to this year');
        return;
    }

    console.log('ok', isMonthOk);
    
    if (isMonthOk === true) {
        hideError(monthYearError, expDateYear);
    }

    return inputValue;
}
function getCorrectCvc() {
    const inputValue = validateInput(cvcError, cvc);
    if (!inputValue) {
        return;
    }
    // check if the input is just a number
    const pattern = /^\d+$/
    if (!pattern.test(inputValue)) {
        showError(cvcError, cvc, 'Numbers only');
        return;
    }
    // check if the input length is exactly 2 digits
    if (inputValue.length != 3) {
        showError(cvcError, cvc, '3 digits');
        return;
    }


    hideError(cvcError, cvc);
    return inputValue;
}

// check if the input is not empty
function validateInput(element, input) {
    const value = input.value;
    if (value === '') {
        showError(element, input);
        return;
    }

    return value;
}


function showError(element, input, message = 'Can\'t be blank') {
    input.style.borderColor = '#ef4444'
    element.style.visibility = 'visible';
    element.textContent = message;
    element.classList.remove('animate-custom');
    void element.offsetWidth;
    element.classList.add('animate-custom');
}

function hideError(element, input) {
    input.style.borderColor = 'hsl(270, 3%, 87%)';
    element.style.visibility = 'hidden';
}


function formatNumber(input) {
    return input.replace(/(\d{4})(?=\d)/g, '$1 ');
}


function getYearTwoDigits(){
    const year = new Date().getFullYear();
    return Number(year.toString().slice(-2));
}