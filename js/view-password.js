const eyeClose = document.querySelector(".eye-close");
const eyeOpen = document.querySelector(".eye-open");

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