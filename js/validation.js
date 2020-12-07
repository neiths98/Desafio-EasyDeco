const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

document.getElementById('submit').onclick = function(event) {
    event.preventDefault();
    if(checkInputs()) {
        Swal.fire({
            icon:  'success',
            title: 'Cadastrado!',
            text: 'Operação concluída com sucesso!',
            
        });
    }
    else {
        Swal.fire({
            icon:  'error',
            title: 'Cadastro NÃO realizado',
            text: 'Confira os campos com erro',
            
        });
    }
};

function checkInputs() {
    const nameValue = name.value.trim();
    const passwordValue = password.value;
    const emailValue = email.value.trim();
    let values = [];
    let numbers = /[0-9]/;
    let especial = /[!"#$%&'()*+,\\\-. /:;<=>?@\[\]^_`{\|}]/; // espaço foi considerado como caracter especial
    let especialNoSpace = /[!"#$%&'()*+,\\\-./:;<=>?@\[\]^_`{\|}]/; // espaço NÃO foi considerado caracter especial
    let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Validação NOME
    if (nameValue === '') {
        setError(name, "Campo não foi preenchido");
        values.push("false");
    } 
    // nome com número
    else if (numbers.test(nameValue)) {
        setError(name, "Nome não pode conter números");
        values.push("false");
    }
    // nome com caracter especial
    else if (especialNoSpace.test(nameValue)) {
        setError(name, "Nome não pode conter caracter especial");
        values.push("false");
    }
    else {
        setSucess(name, "uhuu");
        values.push("true");
    }

    // Validação EMAIL
    if (emailFormat.test(emailValue)) {
        setSucess(email, "uhuu");
        values.push("true");
        console.log("email ok");
    }
    else {
        setError(email, "E-mail inválido");
        values.push("false");
    }


    // Validação SENHA
    if (passwordValue === '') {
        setError(password, "Campo não foi preenchido");
        values.push("false");
        
    }
    // senha curta
    else if (passwordValue.length < 8) { 
        setError(password, "A senha deve conter no mínimo 8 caracteres");
        values.push("false");
    }
    // senha longa
    else if (passwordValue.length > 14) {
        setError(password, "A senha deve conter no máximo 14 caracteres");
        values.push("false");
    }
    // não tem minúscula
    // não tem maiúscula
    else if(!haveLower(passwordValue) || !haveUpper(passwordValue)) {
        setError(password, "Obrigatório pelo menos um caracter maíusculo, um minúsculo");
        values.push("false");
    }
    // senha sem números
    else if(!numbers.test(passwordValue)) {
        setError(password, "Obrigatório pelo menos um caracter numérico");
        values.push("false");
    }
    // senha sem caracter especial
    else if (!especial.test(passwordValue)) {
        setError(password, "Obrigatório pelo menos um caracter especial");
        values.push("false");
    }
    else {
        setSucess(password, "uhuu");
        values.push("true");
    }


    // Validação da validação
    if(values.every(elem => elem === "true")) {
        return true;
    }
    else {
        return false;
    }
}

// Funções de erro / acerto

function setError(input, message) {
    const inputBox = input.parentElement;
    const small = inputBox.parentElement.querySelector('small');
    if (inputBox.parentElement.classList.contains("correct")){
        inputBox.parentElement.classList.remove("correct");        
    }
    inputBox.parentElement.classList.add("wrong");
    small.innerHTML = message;
}

function setSucess(input, message) {
    const inputBox = input.parentElement;
    if (inputBox.parentElement.classList.contains("wrong")){
        inputBox.parentElement.classList.remove("wrong");        
    }
    inputBox.parentElement.classList.add("correct");
}

// Funções para validação

function haveLower(string) {
    let upperString = string.toUpperCase();
    if (string != upperString) {
        return true;
    }
    return false;
}

function haveUpper(string) {
    let lowerString = string.toLowerCase();
    if (string != lowerString) {
        return true;
    }
    return false;
}