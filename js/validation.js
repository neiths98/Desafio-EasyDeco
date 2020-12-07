const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById("password-2");

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
    const emailValue = email.value.trim();
    const passwordValue = password.value;
    const passwordConfirmValue = passwordConfirm.value;
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
    // Testa se nome contém um número
    else if (numbers.test(nameValue)) {
        setError(name, "Nome não pode conter números");
        values.push("false");
    }
    // Testa se nome contém um caractere especial
    else if (especialNoSpace.test(nameValue)) {
        setError(name, "Nome não pode conter caracter especial");
        values.push("false");
    }
    // Nome está adequado
    else {
        setSucess(name, "uhuu");
        values.push("true");
    }

    // Validação EMAIL
    // Testa se e-mail está no formato correto (por meio de Regex)
    if (emailFormat.test(emailValue)) {
        setSucess(email, "uhuu");
        values.push("true");
        console.log("email ok");
    }
    // E-mail adequado
    else {
        setError(email, "E-mail inválido");
        values.push("false");
    }


    // Validação SENHA
    let success = false; 
    // Testa se campo foi preenchido
    if (passwordValue === '') {
        setError(password, "Campo não foi preenchido");
        values.push("false");
        
    }
    // Testa se a senha possui menos de 8 caracteres
    else if (passwordValue.length < 8) { 
        setError(password, "A senha deve conter no mínimo 8 caracteres");
        values.push("false");
    }
    // Testa se a senha possui mais de 14 caracteres
    else if (passwordValue.length > 14) {
        setError(password, "A senha deve conter no máximo 14 caracteres");
        values.push("false");
    }
    // Testa se senha possui pelo menos um caracter maiúsculo e um minúsculo
    else if(!haveLower(passwordValue) || !haveUpper(passwordValue)) {
        setError(password, "Obrigatório pelo menos um caracter maíusculo, um minúsculo");
        values.push("false");
    }
    // Testa se senha contém números
    else if(!numbers.test(passwordValue)) {
        setError(password, "Obrigatório pelo menos um caracter numérico");
        values.push("false");
    }
    // Testa se senha contém caractere especial
    else if (!especial.test(passwordValue)) {
        setError(password, "Obrigatório pelo menos um caracter especial");
        values.push("false");
    }
    // Testa se senha possui mais de 3 caracteres repetidos em sequência ou possui uma mesma sequência de caracteres
    else if (haveCharLoop(passwordValue)) {
        setError(password, "Não é permitido repetir a mesma sequencia de caracteres ou ter muitos caracteres repetidos");
        values.push("false");
    }
    // Senha adequada
    else {
        setSucess(password, "uhuu");
        values.push("true");
        success = true;
    }

    // Validação CONFIRMAÇÃO SENHA
    // Testa se campo foi preenchido
    if (passwordValue === '') {
        setError(passwordConfirm, "Senha não foi preenchida");
        values.push("false");
    }
    // Testa se o campo Senha está adequado 
    else if(success === false) {
        setError(passwordConfirm, "A senha não corresponde  aos requisitos");
        values.push("false");
    }
    // Testa se a Senha tem o mesmo valor da Confirmação de Senha
    else if (passwordConfirmValue != passwordValue) {
        setError(passwordConfirm, "Senhas não coincidem");
        values.push("false");
    }
    // Confirmação de senha adequada
    else {
        setSucess(passwordConfirm, "uhuu");
        values.push("true");
    }


    // Validação da validação
    // Testa se todos os campos foram preenchidos corretamente
    if(values.every(elem => elem === "true")) {
        return true;
    }
    else {
        return false;
    }
}

// FUNÇÕES DE ERRO/ACERTO DE VALIDAÇÃO

// Adiciona a classe "wrong" para campos não adequados e adiciona mensagem de erro
function setError(input, message) {
    const inputBox = input.parentElement;
    const small = inputBox.parentElement.querySelector('small');
    if (inputBox.parentElement.classList.contains("correct")){
        inputBox.parentElement.classList.remove("correct");        
    }
    inputBox.parentElement.classList.add("wrong");
    small.innerHTML = message;
}

// Adiciona a classe "correct" para campos adequados
function setSucess(input, message) {
    const inputBox = input.parentElement;
    if (inputBox.parentElement.classList.contains("wrong")){
        inputBox.parentElement.classList.remove("wrong");        
    }
    inputBox.parentElement.classList.add("correct");
    // Código para caso deseje exibir mensagem de sucesso:
    // small.innerHTML = message;
}

// FUNÇÕES PARA VALIDAÇÃO

// Verifica se existe caractere minúsculo em uma string
function haveLower(string) {
    let upperString = string.toUpperCase();
    if (string != upperString) {
        return true;
    }
    return false;
}

// Verifica se existe caractere maiúsculo em uma string
function haveUpper(string) {
    let lowerString = string.toLowerCase();
    if (string != lowerString) {
        return true;
    }
    return false;
}

// Verifica se existe repetição de cadeias de caracteres em uma string ou se existe mais de 3 caracteres iguais em sequência
function haveCharLoop(string) {
    let vet = [];
    for (let i = 1; i < string.length; i++) {
        vet.push(string.substring(i-1, i+1));
    }
    
    for(i = 0; i < vet.length; i++) {
        if(vet.indexOf(vet[i]) != i) {
            return true;
        }
    }
    return false;
}