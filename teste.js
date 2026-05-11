//Declare 5 variáveis para representar uma viagem 
//(destino, nome do viajante, cidade de origem, duração em dias e meio de transporte)
//2, Organizar uma forma de imprimir eses valores com interpolção ou saida individual

const destino = "Curitiba";
const nomeViajante = "Carlos D";
const cidadeOrigem = "Caracas";
let duracao = 1;
let transporte = "Onibus";

console.log(`O viajante ${nomeViajante} desaja viajar de ${cidadeOrigem} até ${destino}, de ${transporte} em um percurso de ${duracao} semana.`);

//3. Crie dua variaveis númericas com o custo da pasagem e alimentação
//4. Imprimir uma soma dos valores

let hospedagem = 1200;
let alimentacao = 450;

let total = hospedagem + alimentacao

console.log("O total dos gastos será: R$" + total + "reais");