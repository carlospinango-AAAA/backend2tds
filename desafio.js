//1. Declarar 5 variiáveis para representar um funcionário
//Fazer uma saída de forma interpolada (`${}`)

const nomeDoFuncionario = "CarlosD";
let idade = 67;
let cargo = "Gerente";
let estaAtivo = true;
let area = "marketing";

const salariobase = 6300;
const salariobonus = 6700;
let desconto = 10;

let empresa = "City Boys Corporation";

console.log (`A empresa ${empresa}`);
console.log(`O salario base do ${cargo} ${nomeDoFuncionario} será de ${salariobase} reais na area de ${area} se ele estiver ${estaAtivo} `);