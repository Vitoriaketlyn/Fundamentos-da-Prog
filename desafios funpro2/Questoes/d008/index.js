const valor = document.getElementById("preco");
const produto = document.getElementById("produto");
const desconto_calculado = 0.1;
var resultado_1 = document.getElementById("resposta_1");
var resultado_2 = document.getElementById("resposta_2");
var resultado_3 = document.getElementById("resposta_3");

function calculaDesconto(){

    if(valor.value == "" || produto.value == ""){
        resultado_1.innerHTML = "Insira algum valor nas caixas";
        resultado_2.innerHTML = ""
        resultado_3.innerHTML = ""
    }else{
        var calculo = Number(valor.value)    * desconto_calculado;
        var calculo_final = Number(valor.value) - Number(calculo);
        resultado_1.innerHTML = `O valor inicial era R$ ${valor.value}`;
        resultado_2.innerHTML = `Você acaba de ganhar um desconto de R$ ${calculo} (-10%)`;
        resultado_3.innerHTML = `No fim, você vai pagar R$ ${calculo_final} no produto ${produto.value}`;
    }

}
