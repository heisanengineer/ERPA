const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
let message;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // username controls

  if (username.value === "") {
    error(username, "username is required.");
  } else if (!validateUsername(username.value)) {
    error(
      username,
      "The username cannot contain digits, numbers, or special characters, and must be at least 8 characters long."
    );
  } else {
    success(username);
  }
  // e-mail controls
  if (validateEmail(email.value)) {
    success(email);
  } else if (email.value === "") {
    error(email, "email is required.");
  } else {
    error(email, "incorrect email address");
  }
  // password controls
  if (password.value === "") {
    error(password, "password is required.");
  } else if (!validatePassword(password.value)) {
    error(
      password,
      "The password must meet the following criteria: it should contain at least one digit, one lowercase letter, one uppercase letter, and should be at least 8 characters long."
    );
  } else {
    success(password);
  }
  // re-password controls
  if (repassword.value != password.value && repassword.value != "") {
    error(repassword, "Password and re-password are different");
  } else if (repassword.value === "") {
    error(repassword, "re-password is required.");
  } else {
    success(repassword);
  }
});

// error operation
function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}

// success operation
function success(input) {
  input.className = "form-control is-valid";
}

// password validate
function validatePassword(password) {
  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&+]{8,}$/;
  return regex.test(password);
}

// username validate
function validateUsername(password) {
  const regex = /^[a-zA-Z]{8,}$/;
  return regex.test(password);
}

// e-mail regex validate
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
