var dados = [];
var banco = window.localStorage;

$(document).ready(function () {
    
    $('#bEnter').click( function () {

        var email = $('#tEmail').val();
        var password = $('#tSenha').val();

        var pessoa = JSON.parse(localStorage.getItem('Pessoa'));
        
        if (email == '' || password == '') {
            alert('Preencha todos os campos');
        } else {
            for (a = 0; a < pessoa.length; a++) {
                if (pessoa[a][1] == email && pessoa[a][2] == password) {
                    window.location.href = '../../Tela Inicial/index.html';
                } else {
                    alert('Dados não encontrados!');
                }
            }
        }
    });
    
});