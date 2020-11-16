var banco = window.localStorage;

$(document).ready(function () {
    
    $("#bSalvar").click(function () {

        change();

        var data = [];
        var senha = $("#tSenha").val();
        var confirmaSenha = $("#tConfirmaSenha").val();
        var userName = $("#tUsername").val();
    
        data.push(senha);
        data.push(confirmaSenha);
        data.push(userName);

        banco.setItem("data", JSON.stringify(data));

        var dataBanco = JSON.parse(banco.getItem("data"));
    });
});


function change() {
if($("#tNome").val() == "") {
    $("#tNome").addClass("semDigito");
}else{
    $("#tNome").removeClass("semDigito");
}
if($("#tSobreNome").val() == "") {
    $("#tSobreNome").addClass("semDigito");
}else{
    $("#tSobreNome").removeClass("semDigito");
if($("#tCPF").val() == "") {
    $("#tCPF").addClass("semDigito");
}else{
    $("#tCPF").removeClass("semDigito");
}

if($("#tEmail").val() == "") {
    $("#tEmail").addClass("semDigito");
}else{
    $("#tEmail").removeClass("semDigito");
}

if($("#tConfirmaEmail").val() == "") {
    $("#tConfirmaEmail").addClass("semDigito");
}else{
    $("#tConfirmaEmail").removeClass("semDigito");
}

if($("#tCEP").val() == "") {
    $("#tCEP").addClass("semDigito");
}else{
    $("#tCEP").removeClass("semDigito");
}

if($("#tEndereco").val() == "") {
    $("#tEndereco").addClass("semDigito");
}else{
    $("#tEndereco").removeClass("semDigito");
}

if($("#tNumero").val() == "") {
    $("#tNumero").addClass("semDigito");
}else{
    $("#tNumero").removeClass("semDigito");
}

if($("#tComplemento").val() == "") {
    $("#tComplemento").addClass("semDigito");
}else{
    $("#tComplemento").removeClass("semDigito");
}

if($("#tUsername").val() == "") {
    $("#tUsername").addClass("semDigito");
}else{
    $("#tUsername").removeClass("semDigito");
}
};