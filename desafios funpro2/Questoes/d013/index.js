var aluno = document.getElementById("aluno");
var nota_1 = document.getElementById("nota_1");
var nota_2 = document.getElementById("nota_2");
var resposta_1 = document.getElementById("resposta_1");
var resposta_2 = document.getElementById("resposta_2");
var resposta_3 = document.getElementById("resposta_3");

var media_1 = "3,0";
var media_2 = "6,0";

function calculaMedia(){
    var calculo = (Number(nota_1.value) + Number(nota_2.value)) /2;
    if(calculo>6){
        resposta_1.innerHTML = `Com as notas ${nota_1.value} e ${nota_2.value} a média é ${calculo}`;
        resposta_2.innerHTML = `Com a média acima de ${media_2} o aluno ${aluno.value} está APROVADO`;
        resposta_3.innerHTML = "";
    }else if(calculo>=3){
        resposta_1.innerHTML = `Com as notas ${nota_1.value} e ${nota_2.value} a média é ${calculo}`;
        resposta_2.innerHTML = `Com a média entre ${media_1} e ${media_2} o aluno ${aluno.value} está de recuperação`;
        resposta_3.innerHTML = ""
    }else if(aluno.value == "" || nota_1.value == "" || nota_2.value == ""){
        resposta_1.innerHTML = `Insira um valor para os campos`;
        resposta_2.innerHTML = "";
        resposta_3.innerHTML = "";
    }else{
        resposta_1.innerHTML = `Com as notas ${nota_1.value} e ${nota_2.value} a média é ${calculo}`;
        resposta_2.innerHTML = `Com a média abaixo de ${media_1} o aluno ${aluno.value} está reprovado`;
    }
    
}