//SISTEMA DE GERENCIAMENTO DE PERSONAGEM

function calcularPontuacaoTotal(historicoDePontos) {
    const somarRodada = function(acumulador, pontosDaFase) {
        const novaSoma = acumulador + pontosDaFase;
        return novaSoma;
    };
    
    const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0);
    return pontuacaoFinal;
};

Function filtrarMissoesConcluidas(listaDeMissoes){
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
    } else if (acao === "descatar") //Parei aqui
}

const pontosDoJogador =[100, 50, 200, 10]
console.log(pontosDoJogador);