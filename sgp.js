//SISTEMA DE GERENCIAMENTO DE PERSONAGEM

function calcularPontuacaoTotal(historicoDePontos) {
    const somarRodada = function(acumulador, pontosDaFase) {
        const novaSoma = acumulador + pontosDaFase;
        return novaSoma;
    };
    
    const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0);
    return pontuacaoFinal;

 functionfiltraMissoesConcluidas(listaDeMissoes){
    const verificarStatusDaMissao = function(missao) {
        const foiFinalizada = missao.status === "concluída"; //=== Igualdade ESTRITA
        return foiFinalizada;
    };

    const apenasConcluidas = listaDeMissoes.filter(verificarStatusDaMissao);
    return apenasConcluidas;
};

function atualizarInventario(inventarioAtual, acao, nomeDoItem) {
    let novoInventario;

    if (acao === "pegar") {
        const inventarioComItemNovo = [inventarioAtual, nomeDoItem];
        novoInventario = inventarioComItemNovo;
    } else if (acao === "descatar") {
        const inventarioSemUltimoItem = inventarioAtual.slice();
        novoInventario = inventarioSemUltimoItem;
    } else {
        novoInventario = inventarioAtual;
    }
    return novoInventario; //Retornar a mochila do jogador atualizada
};

const pontosDoJogador =[100, 50, 250, 10];
const total = calcularPontuacaoTotal(pontosDoJogador);
console.log("Pontuação final");

const missoes = [
    {nome: "Salvar a aldeia", status:"concluida"},
    {nome: "Encontrar o mapa", status: "em andamendo"},
    {nome: "Derrotar o chefão", status: "falhou"},
    {nome: "Coletar recursos", status: "concluida"}
];

const  concluidas = filtraMissoesConcluidas(missoes);
console.log("Missoes Concluidas: " , concluidas);

const mochila = ["Mapa", "Lanterna"];
const mochilaAtualizada = atualizarInventario("pegar", "Bússola");
console.log("")