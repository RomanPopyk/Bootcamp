const containerNewsletter = document.querySelector(".newsletter");
const containerSuccess = document.querySelector(".hidden-success-window");

const inputEmail = document.querySelector("email-input");
const formNewsletter = document.querySelector("form");
const spanEmail = document.querySelector(".email-receiver");
const messageError = document.querySelector(".error-alert");

const ERROR_MESSAGE = "Valid email required";

inputEmail.addEventListener("input", () => {
    inputEmail.classList.remove("highlight");
    messageError.textContent = "";
});

formNewsletter.addEventListener("submit", function (event) {
    event.preventDefault();

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const input = inputEmail.value;

    if (!input.match(mailformat)) {
        messageError.textContent = ERROR_MESSAGE;
        inputEmail.classList.add("highlight");
        return;
    }

    containerNewsletter.classList.add("hidden");
    containerSuccess.classList.remove("hidden");
    spanEmail.textContent = input;
});