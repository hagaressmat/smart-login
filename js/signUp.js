var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");

var nameNotValid = document.getElementById("nameNotValid");
var emailNotValid = document.getElementById("emailNotValid");
var passNotValid = document.getElementById("passNotValid");

signupName.addEventListener("change", function () {
  nameValid(signupName.value);
});
signupEmail.addEventListener("change", function () {
  emailValid(signupEmail.value);
});

function nameValid(value) {
  regex = /^[a-z ,.'-]+$/;
  if (regex.test(value)) {
    nameNotValid.style.color = `green`;
    nameNotValid.innerHTML = ` the name is valid`;

    return regex.test(value);
  } else {
    nameNotValid.style.color = `red`;
    nameNotValid.innerHTML = ` the name is not valid`;

    return false;
  }
}

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

function passValid(value) {
  regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (regex.test(value)) {
    passNotValid.style.color = `green`;
    passNotValid.innerHTML = ` the password is valid`;
    return regex.test(value);
  } else {
    passNotValid.style.color = `red`;
    passNotValid.innerHTML = ` the password is not valid`;
    return false;
  }
}

var users = [];

function signUp() {
  if (
    nameValid(signupName.value) &&
    emailValid(signupEmail.value) &&
    passValid(signupPassword.value)
  ) {
    var user = localStorage.getItem("user");
    let storedUser = user ? JSON.parse(user) : [];

    for (var i = 0; i < storedUser.length; i++) {
      if (storedUser[i].email === signupEmail.value) {
        emailNotValid.style.color = `red`;
        emailNotValid.innerHTML = ` the email is already exist`;
        return;
      }
    }

    obj = {
      name: signupName.value,
      email: signupEmail.value,
      password: signupPassword.value,
    };

    users.push(obj);

    storedUser.push(obj);
    localStorage.setItem("user", JSON.stringify(storedUser));

    window.location.href = "./index.html";
  }
}
