var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");

var emailNotValid = document.getElementById("emailNotValid");

var incorrect = document.getElementById("incorrect");

var page = document.getElementById("group");

var nav = document.getElementById("nav");

nav.style.visibility = `hidden`;

signinEmail.addEventListener("input", function () {
  emailValid(signinEmail.value);
});

function emailValid(value) {
  regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.test(value)) {
    emailNotValid.style.color = `green`;
    emailNotValid.innerHTML = ` the email is valid`;
    return regex.test(value);
  } else {
    emailNotValid.style.color = `red`;
    emailNotValid.innerHTML = ` the email is not valid`;
    return false;
  }
}

function login() {
  var user = localStorage.getItem("user");
  let storedUser = user ? JSON.parse(user) : [];

  for (var i = 0; i < storedUser.length; i++) {
    if (storedUser[i].email === signinEmail.value) {
      if (storedUser[i].password !== signinPassword.value) {
        incorrect.innerHTML = ` the email or password incorrect`;
        incorrect.style.color = `red`;
      } else if (storedUser[i].password === signinPassword.value) {
        page.innerHTML = ` 
        <h1 > Welcom ${storedUser[i].name}</h1>
      `;
        nav.style.visibility = `visible`;
      }
    } else if (
      storedUser[i].email !== signinEmail.value ||
      storedUser.length === 0
    ) {
      incorrect.innerHTML = ` the email is not exist`;
      incorrect.style.color = `red`;
    }
  }
}

function logout() {
  window.location.href = "./signUp.html";

  nav.style.visibility = `hidden`;
}
