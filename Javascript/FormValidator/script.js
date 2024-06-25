const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
let message;

function error(input,message){
    username.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input){
    username.className = 'form-control is-valid';
}

form.addEventListener("submit",function(e){
    e.preventDefault();

    if(username.value == ''){
        error(username,'username is required.');
    }
    else{
        success(username);
    }
    if(email.value == ''){
        error(email,'email is required.');
    }
    else{
        success(email);
    }
    if(password.value == ''){
        error(password,'password is required.');
    }
    else{
        success(password);
    }
    if(repassword.value == ''){
        error(repassword,'re-password is required.');
    }
    else{
        success(repassword);
    }

});