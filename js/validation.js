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
    const passwordValue = password.value; // espaço é um caractere especial?
    let values = [];

    // Validação NOME
    if (nameValue === '') {
        setError(name, "Campo não foi preenchido");
        values.push("false");
    }
    else {
        setSucess(name, "uhuu");
        values.push("true");
    }

    // Validação EMAIL


    // Validação SENHA
    if (passwordValue === '') {
        setError(password, "Campo não foi preenchido");
        values.push("false");
        
    }
    else if (passwordValue.length < 8) {
        setError(password, "A senha deve conter no mínimo 8 caracteres");
        values.push("false");
    }
    else if (passwordValue.length > 14) {
        setError(password, "A senha deve conter no máximo 14 caracteres");
        values.push("false");
    }
    else if ($.isNumeric(passwordValue)){
        setError(password, "Obrigatório pelo menos um caracter maíusculo, um minúsculo e um caracter especial");
        values.push("false");
    }
    else {
        setSucess(password, "uhuu");
        values.push("true");
    }


    // Validação da validação
    console.log(values);
    if(values.every(elem => elem === "true")) {
        return true;
    }
    else {
        return false;
    }
}


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