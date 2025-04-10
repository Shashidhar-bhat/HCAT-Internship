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

// Event Handling & Validation
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

toggleFormBtn.addEventListener('click', () => {
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
    } else {
        form.classList.add('hidden');
    }
});


darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});