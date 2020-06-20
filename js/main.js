//Função consultaCep é chamada quando é clicado o botão de buscar no script html
function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+ cep + "/json/";
    console.log(url); //serve apenas para fazer debugg no navegador
    
    //Função ajax para obter os dados da api da url viacep
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response); //serve apenas para fazer debugg no navegador
            $("#logradouro").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
            $("#titulo_cep").html("CEP "+response.cep)
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}

//Função para carregar a tabela e a barra de carregamento com as informações somente após clicar no botão
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})
