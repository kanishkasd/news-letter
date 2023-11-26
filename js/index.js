document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let emailInput = document.getElementById("emailInput").value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let errorMessage = document.querySelector(".error-message");
    let successMessage = document.querySelector(".success-message");
    let container = document.querySelector(".container");
    let registeredEmail = document.querySelector(".registered-email");
    let dissmissBtn = document.querySelector(".dismiss-btn");

    if (!emailPattern.test(emailInput)) {
        errorMessage.style.display = "block";
        document.getElementById("emailInput").value = "";
    } else {

        container.style.display = "none";
        successMessage.style.display = "block";
        registeredEmail.innerHTML = emailInput;
    }

    dissmissBtn.addEventListener("click", function() {
        successMessage.style.display = "none";
        container.style.display = "flex";
        document.getElementById("emailInput").value = "";
    });



});
