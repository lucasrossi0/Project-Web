var dados = [];
var banco = window.localStorage;
const pessoa = JSON.parse(banco.getItem('Pessoa'));

$(document).ready(function () {
    
    $('#bSalvar').click(function () {

        var name = $('#tNome').val();
        var surname = $('#tSobreNome').val();
        var email = $('#tEmail').val();
        var password = $('#tSenha').val();
        var confirmP = $('#tConfirmaSenha').val();
        
        if (name == '' || surname == '' || email == '' || password == '' || confirmP == '') {
            alert('Por favor, complete todos os campos corretamente')
        } else {
            if (password == confirmP) {
                var list = [];

                list.push(name);
                list.push(surname);
                list.push(email);
                list.push(password);
                list.push(confirmP);

                dados.push(list);

                if (pessoa == null || pessoa.length == 0) {
                    banco.setItem('Pessoa', JSON.stringify(dados));
                } else {
                    for (a = 0; a < pessoa.length; a++) {
                        dados.push(pessoa[a]);
                        banco.setItem('Pessoa', JSON.stringify(dados));
                    }
                }

                window.location.href = '../../Tela de Login/HTML/login.html';
            } else {
                alert('Campo equivocados, não estão iguais')
            }
        }
    });
});