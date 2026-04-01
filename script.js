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
   

})