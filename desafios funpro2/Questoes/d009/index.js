const funcionario = document.getElementById("funcionario");
const salario = document.getElementById("salario");
const desconto = document.getElementById("porcentagem");

var resultado_1 = document.getElementById("resposta_1");
var resultado_2 = document.getElementById("resposta_2");
var resultado_3 = document.getElementById("resposta_3");

function reajusteSalarial(){

    if(funcionario.value == "" || salario.value == "" || desconto.value == ""){
        resultado_1.innerHTML = "Insira valores válidos no campos abaixo"
        resultado_2.innerHTML = ""
        resultado_3.innerHTML = ""
    }else{
        var calculo_salario = Number(salario.value) * Number(desconto.value) /100;
        var salario_total = Number(calculo_salario) + Number(salario.value);

        resultado_1.innerHTML = `O salário atual era de R$ ${salario.value}`;
        resultado_2.innerHTML = `Com um aumento de ${desconto.value}%, o salário vai aumentar R$ ${calculo_salario} no próximo mês`
        resultado_3.innerHTML = `E a partir daí, ${funcionario.value} vai passar a ganhar R$ ${salario_total}`
    }
}