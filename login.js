const button = document.getElementsByClassName("send")[0];
const emailInput = document.getElementsByClassName("form__input")[0];
const passwordInput = document.getElementsByClassName("form__input")[1];
const formEl = document.getElementById('login-form');

button.addEventListener("click", function (event) {
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordInput.value);
});

formEl.addEventListener('submit', login);

function login(event) {
    event.preventDefault();
    if (passwordInput.value == "" || emailInput.value == "") {
        return false;
    }  else {
        window.location = 'index.html'
    }
}
