var banco = window.localStorage;

$(document).ready(function () {
    
    $("#bSalvar").click(function () {

        var data = [];
        var nome = $("#tNome").val();
        var sobreNome = $("#tSobreNome").val();
        var cpf = $("#tCPF").val();
        var email = $("#tEmail").val();
        var confirmaEmail = $("#tConfirmaEmail").val();
        var senha = $("#tSenha").val();
        var confirmaSenha = $("#tConfirmaSenha").val();
        var cep = $("#tCEP").val();
        var endereco = $("#tEndereco").val();
        var numero = $("#tNumero").val();
        var complemento = $("#tComplemento").val();
    
        data.push(nome);
        data.push(sobreNome);
        data.push(cpf);
        data.push(email);
        data.push(confirmaEmail)
        data.push(senha);
        data.push(confirmaSenha);
        data.push(cep);
        data.push(endereco);
        data.push(numero);
        data.push(complemento);

        banco.setItem("data", JSON.stringify(data));

        var dataBanco = JSON.parse(banco.getItem("data"));
    });
});