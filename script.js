let form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let peso = document.getElementById('peso').value;
    let estado = document.getElementById('estado').value;
    let tipo = document.querySelector('input[name="tipo"]:checked');

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroTelefone').textContent = '';
    document.getElementById('erroPeso').textContent = '';
    document.getElementById('erroIdade').textContent = '';
    document.getElementById('erroCidade').textContent = '';
    document.getElementById('erroEstado').textContent = '';
    document.getElementById('erroTipo').textContent = '';
    



})