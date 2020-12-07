// Funções que cancelam (resetam) ilustrações de ERRO ou ACERTO ao DIGITAR novo conteúdo no campo

// RESET NOME
name.addEventListener("keydown", function() {
    if(name.parentElement.parentElement.classList.contains("correct")) {
        name.parentElement.parentElement.classList.remove("correct");  
    }
    else if (name.parentElement.parentElement.classList.contains("wrong")) {
        name.parentElement.parentElement.classList.remove("wrong")
    }
});

// RESET EMAIL
email.addEventListener("keydown", function() {
    if(email.parentElement.parentElement.classList.contains("correct")) {
        email.parentElement.parentElement.classList.remove("correct");  
    }
    else if (email.parentElement.parentElement.classList.contains("wrong")) {
        email.parentElement.parentElement.classList.remove("wrong")
    }
});

// RESET SENHA
password.addEventListener("keydown", function() {
    if(password.parentElement.parentElement.classList.contains("correct")) {
        password.parentElement.parentElement.classList.remove("correct");  
    }
    else if (password.parentElement.parentElement.classList.contains("wrong")) {
        password.parentElement.parentElement.classList.remove("wrong")
    }
});

// RESET CONFIRMAÇÃO DE SENHA
passwordConfirm.addEventListener("keydown", function() {
    if(passwordConfirm.parentElement.parentElement.classList.contains("correct")) {
        passwordConfirm.parentElement.parentElement.classList.remove("correct");  
    }
    else if (passwordConfirm.parentElement.parentElement.classList.contains("wrong")) {
        passwordConfirm.parentElement.parentElement.classList.remove("wrong")
    }
});