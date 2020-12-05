const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

document.getElementById('submit').onclick = function(event) {
    event.preventDefault();
    if(checkInputs()) {
        Swal.fire({
            icon:  'success',
            title: 'Oops...',
            text: 'Something went wrong!',
        });
    }
    else {
        Swal.fire({
            icon:  'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        });
    }
};

function checkInputs() {
    const nameValue = name.value.trim();
    let values = [];
    if (nameValue === '') {
        setError(name, "Campo não foi preenchido");
        values.push(false);
    }
    else {
        setSucess(name, "uhuu");
        values.push(true);
    }
    console.log(values);

    if(values.every(elem => elem === true)) {
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