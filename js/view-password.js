const eyeClose = document.querySelector(".eye-close");
const eyeOpen = document.querySelector(".eye-open");

const passwordConfirm = document.getElementById("password-2");
const eyeCloseConfirm = document.querySelector(".eye-close-confirm");
const eyeOpenConfirm = document.querySelector(".eye-open-confirm");

// Senha

eyeClose.addEventListener("click", function() {

    eyeClose.classList.remove("active");
    eyeOpen.classList.add("active");
    
    if (password.type == 'password') {
        password.type = 'text';
    }
    else {
        password.type = 'password';
    }   
    
});

eyeOpen.addEventListener("click", function() {

    eyeOpen.classList.remove("active");
    eyeClose.classList.add("active");
    
    if (password.type == 'password') {
        password.type = 'text';
    }
    else {
        password.type = 'password';
    }   
    
});

// Confirmação de senha

eyeCloseConfirm.addEventListener("click", function() {

    eyeCloseConfirm.classList.remove("active");
    eyeOpenConfirm.classList.add("active");
    
    if (passwordConfirm.type == 'password') {
        passwordConfirm.type = 'text';
    }
    else {
        passwordConfirm.type = 'password';
    }   
    
});

eyeOpenConfirm.addEventListener("click", function() {

    eyeOpenConfirm.classList.remove("active");
    eyeCloseConfirm.classList.add("active");
    
    if (passwordConfirm.type == 'password') {
        passwordConfirm.type = 'text';
    }
    else {
        passwordConfirm.type = 'password';
    }   
    
});