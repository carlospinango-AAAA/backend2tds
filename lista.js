const alunos = ["Alice","Bruna","Carla"];

alunos.push("Diego");
alunos.unshift("Lopes");
console.log(alunos);

console.log(alunos.indexOf("Diego"));//Retorna o indice do array
console.log(alunos.indexOf("paula"));

console.log(alunos.includes("Paula"));
console.log(alunos.includes("Carla"));