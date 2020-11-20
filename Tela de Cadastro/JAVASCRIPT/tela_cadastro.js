var banco = window.localStorage;
var error = false; 
var data = [];

$(document).ready(function () {
    
    $("#bSalvar").click(function () {

        validacao("#tNome");
        validacao("#tSobreNome");
        validacao("#tCPF");
        validacao("#tEmail");
        validacao("#tConfirmaEmail");
        var senha = validacao("#tSenha");
        validacao("#tConfirmaSenha");
        validacao("#tCEP");
        validacao("#tEndereco");
        validacao("#tNumero");
        validacao("#tComplemento");
        var userName = validacao("#tUsername");


        validatePassword();
        validateEmail();

        if (error == true) {
            window.alert("Dados invalidos");
        } else {
            window.alert("Dados cadastrados com sucesso");
        }
    
        data.push(senha);
        data.push(userName);

        console.log(data);

        banco.setItem("data", JSON.stringify(data));

        var dataBanco = JSON.parse(banco.getItem("data"));
    });
});

function validacao (idfield) {

    var valor = $(idfield).val();

    if (valor == "") {
        idfield.addClass("semDigito");
        error = true;
    }else {
        idfield.removeClass("semDigito");
    };
};

function validatePassword () {
    var senha = $("#tSenha").val();
    var confirmaSenha = $("#tConfirmaSenha").val();

    if (senha != confirmaSenha) {
        $("#tConfirmaSenha").addClass("semDigito");
        error = true;
        window.alert("As senhas devem ser iguais?");
    } else {
        $("#tConfirmaSenha").removeClass("semDigito");
    };
};

function validateEmail () {

    var email = $("tEmail").val();
    var confirmaEmail = $("tConfirmaEmail").val();

    if (email != confirmaEmail) {
        $("tConfirmaEmail").addClass("semDigito");
        error = true;
    } else {
        $("tConfirmaEmail").removeClass("semDigito");
    };
};