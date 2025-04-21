const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const toggleFormBtn = document.getElementById('toggleFormBtn');
const successMessage = document.getElementById('successMessage');
const darkModeToggle = document.getElementById('darkModeToggle');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const timerElement = document.getElementById('timer');

let timerSeconds = 5;
let countdown;

function startTimer() {
    submitBtn.disabled = true;
    timerElement.textContent = `Please wait ${timerSeconds} seconds before submitting...`;

    countdown = setInterval(() => {
        timerSeconds--;
        if (timerSeconds > 0) {
            timerElement.textContent = `Please wait ${timerSeconds} seconds before submitting...`;
        } else {
            clearInterval(countdown);
            timerElement.textContent = "";
            submitBtn.disabled = false;
        }
    }, 1000);
}


function validateForm() {
    let valid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = "Name is required";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    if (!emailInput.value.includes("@")) {
        emailError.textContent = "Invalid email";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (messageInput.value.trim().length < 5) {
        messageError.textContent = "Message too short";
        valid = false;
    } else {
        messageError.textContent = "";
    }

    return valid;
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validateForm()) {
        successMessage.classList.remove('hidden');
        successMessage.textContent = "Thank you! Your message has been sent.";

        form.reset();
        timerSeconds = 5;
        startTimer();
    } else {
        successMessage.classList.add('hidden');
    }
});


toggleFormBtn.addEventListener('click', () => {
    form.classList.toggle('hidden');
});


darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


startTimer();
