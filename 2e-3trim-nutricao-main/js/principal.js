//atribui o valor da tag h1 para a variável titulo
let titulo = document.querySelector("h1");
//mostra no console do navegador a variável título
console.log(titulo);
//modifica o valor do título para a frase "Fica grandão birlllll"-
titulo.textContent = "cuzin piscante";

//--------------aqui vamos mexaer na tabela de imc-------------------
//armazena na variavel paciente as informaçoes do primeiro paciente
let paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);
//armazena somente as colunas do peso e altura
let tdPeso = paciente.querySelector(".info-peso") 
let tdAltura = paciente.querySelector(".info-altura");
//armazena somente as informaçoes de texto de peso e altura
let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

//acessa a caluna imc o valor para o resultado 
let tdimc = paciente.querySelector(".info-imc")


//validaçao de dados 
let pesoehvalido = true;
let alturaehvalida = true;

if(peso < 0 || peso > 1000){
      console.log("peso invalido!");
    tdimc.textContent = "peso invalido vc esta muito gordo porpeta "
    pesoehvalido = false;
}
if(altura< 0 || altura > 3){
    console.log("altura invalida!");
    tdimc.textContent = "altura invalida"
    alturaehvalida = false;
}

if(pesoehvalido === true && alturaehvalida === true){
    //reliza o cauculo do imc
    let imc = peso / (altura * altura);
    console.log(imc);
    tdimc.textContent = imc;
}else{
    tdimc.textContent = "peso e/ou altura invalido";
}






