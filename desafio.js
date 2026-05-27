//1. Declarar 5 variiáveis para representar um funcionário
//Fazer uma saída de forma interpolada (`${}`)

const nomeDoFuncionario = "CarlosD";
let idade = 67;
let cargo = "Gerente";
let estaAtivo = true;
let area = "marketing";

const salariobase = 6300;
const salariobonus = 67;
let salariofinal = salariobase + salariobonus;
let desconto = 10;
 


let empresa = "City Boys Corporation";

console.log ("Essa é a empresa " + empresa);

console.log ("Trabalhador: " + nomeDoFuncionario);
console.log ("Idade: " + idade);
console.log (` Ele é o ${cargo} da area de ${area}`);
console.log ("Salário: " + salariobase);
console.log ("Salario bonus: " + salariobonus);