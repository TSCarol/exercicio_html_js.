const form = document.getElementById('form-deposito');

function numeroValidacao(numeroA, numeroB) {
    console.log(numeroA+ ' ' +numeroB);
    const resultado = parseInt(numeroA) < parseInt(numeroB);
    console.log(resultado);
    return resultado;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();  

    const numeroA = document.getElementById('numeroA').value;
    const numeroB = document.getElementById('numeroB').value;

    const containerMensagemSucesso = document.querySelector('.sucess-message');
    const containerMensagemErro = document.querySelector('.error-message');

    const mensagemSucesso = `o numero <b>${numeroB}</b> é maior que o número <b>${numeroA}</b>`;
    const mensagemErro = 'O valor A precisa ser menor que o valor B!';

    let formValidacao = numeroValidacao(numeroA, numeroB);
    if (formValidacao) {
        containerMensagemSucesso.innerHTML = mensagemSucesso ;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';

        numeroA.value = '';
        numeroB.value = '';
    } else {
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }
});

console.log(form);

