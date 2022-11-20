// acrescentar e diminuir os inputs de funcionarios
let btnMinus = document.getElementById('btn-minus');
let btnPlus = document.getElementById('btn-plus');

let qtd = document.getElementById('qtd');

// diminuir valor do input de funcionarios
btnMinus.addEventListener('click', function (event) {
    event.preventDefault();
    // valida o valor do input para não diminuir menor que 0
    if (qtd.value >= 1) {
        qtdMinus = Number(qtd.value) - 1;
        qtd.value = qtdMinus;
    } else {
        qtd.value = 0;
    }

});

// aumenta valor do input de funcionarios
btnPlus.addEventListener('click', function (event) {
    event.preventDefault();

    qtdPlus = Number(qtd.value) + 1;
    qtd.value = qtdPlus;
})


// validação do formulario

let form = document.getElementById('form');
let erroName = document.getElementById('form-error-name');
let erroEmail = document.getElementById('form-error-email');
let inputs = document.querySelectorAll(".inputs");



// pega os inputs de nome completo e email do formulario
function checkInputs(inputs) {
    var filled = true;

    inputs.forEach(function (input) {

        if (input.value === "") {
            filled = false;
        }

    });

    return filled;

}

let btnSubmit = document.getElementById('btnSubmit');

// valida se os inputs de nome completo e email do formulario foram preenchidos
inputs.forEach(function (input) {

    input.addEventListener("keyup", function () {
        if (checkInputs(inputs)) {
            // se foram preenchidos tira o atributo disabled do botão submit 
            btnSubmit.disabled = false;
        } else {
            // se não foram preenchidos coloca o atributo disabled do botão submit 
            btnSubmit.disabled = true;
        }
    });
});


// valida os campos foram preenchidos e mensagem de sucesso de envio de mensagem
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let sentMessage = document.getElementById('sentMessage');

    
    
setTimeout(appearSentMessage , 100);

    function appearSentMessage() {
        sentMessage.style.opacity = "1";
        sentMessage.style.transition = "opacity .10s linear";
        setTimeout(disappearSentMessage , 5000);
        
    }

    function disappearSentMessage() {
        sentMessage.style.opacity = "0";
        sentMessage.style.transition = "opacity .10s linear";
    }

    let nome = form.nomeCompleto.value;
    let email = form.email.value;

    if (!nome) {
        event.preventDefault();
        console.log('nome não cadastrado');
        erroName.style.display = 'block';

    } else if (!email) {
        event.preventDefault();
        erroEmail.style.display = 'block';
    } else {

    }

});