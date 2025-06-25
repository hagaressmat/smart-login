var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");

var incorrect = document.getElementById("incorrect");

var page = document.getElementById("group");

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
      } else if (storedUser[i].password === signinPassword.value) {
        page.innerHTML = `<h1>Welcome ${storedUser[i].name}</h1> `;
      }
    } else if (storedUser[i].email !== signinEmail.value) {
      incorrect.innerHTML = ` the email is not exist`;
    }
  }
}
