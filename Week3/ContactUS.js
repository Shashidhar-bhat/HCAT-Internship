document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitBtn = document.getElementById("submitBtn");
    const successMessage = document.getElementById("successMessage");
    const toggleFormBtn = document.getElementById("toggleFormBtn");

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            document.getElementById("nameError").textContent = "Name is required";
            isValid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            document.getElementById("emailError").textContent = "Invalid email format";
            isValid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        if (messageInput.value.trim() === "") {
            document.getElementById("messageError").textContent = "Message cannot be empty";
            isValid = false;
        } else {
            document.getElementById("messageError").textContent = "";
        }

 
        submitBtn.disabled = !isValid;
    }

   
    nameInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    messageInput.addEventListener("input", validateForm);

    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        successMessage.classList.remove("hidden");
        form.reset();
        submitBtn.disabled = true;
    });

    toggleFormBtn.addEventListener("click", function () {
        if (form.style.display === "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    });
});
