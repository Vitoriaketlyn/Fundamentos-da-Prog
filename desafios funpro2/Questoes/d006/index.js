

function Calcular(){
    var numero = parseInt(document.getElementById("valor").value);
    var resposta = document.getElementById("resultado");
    if(document.getElementById("Ctof").checked==true)
    resposta.innerHTML = ctof(numero);
    if(document.getElementById("Ctok").checked==true)
    resposta.innerHTML = ctok(numero);
}

function ctof (x){
    return(1.8*x +32)
}

function ctok (x){
    return(x + 273)
}


var celsius = document.getElementById("Celsius").innerHTML(numero);
