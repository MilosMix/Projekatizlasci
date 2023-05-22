const user = {
    email: null,
    password: null,
    get isLogedin() {
        if (this.email == null || this.password == null) {
            return false;
        } else {
            return true;
        }
    },
}

user.email = localStorage.getItem("email");
user.password = localStorage.getItem("password");
function promijeniDugme() {
    const loginBtn = document.getElementById("login-btn");
    const displayEmailEl = document.getElementById("display-email");
    const logoutBtn = document.getElementById("logout-btn")
    if (user.isLogedin) {
        displayEmailEl.textContent = user.email;
        loginBtn.classList.add('hidden');
        displayEmailEl.classList.remove('hidden');
        logoutBtn.classList.remove('hidden');
    }
}
promijeniDugme();

const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', function (event) {
    window.location = 'index.html';
    localStorage.clear();
});
