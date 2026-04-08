//Calculadora de IMC

let nome = "Carlos";
let peso = 51;
let altura = 1.62;

//Função que calcula e retorna o IMC
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura)
};

let resultado = calcularIMC(peso, altura)
console.log(`IMC de ${nome}: ${resultado}`);