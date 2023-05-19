const user = {
    email: null,
    password: null,
    isLogedin() {
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
    var dugme = document.getElementById("dugme");
    dugme.innerHTML = user.email; console.log (dugme)
  }
console.log (promijeniDugme())