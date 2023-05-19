const button = document.getElementsByClassName("send")[0];
const emailInput = document.getElementsByClassName("login")[0];
const passwordInput = document.getElementsByClassName("login")[1];



button.addEventListener("click", function (event) {
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordInput.value);
});

function indexhtml() {
    if (passwordInput.value == "" || emailInput.value == "") {
        return false;

    }
    else {
        window.location = 'index.html'
    }
}
