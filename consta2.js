function criarConta(titular, saldoInicial {
    let saldo = saldoInicial;

    return {
        titular,
        depositar(valor) {
            if (valor <= 0) {
                console.log("Valor do depósito inválido.");
                return; //Parar o proceso.
            }
            saldo += valor;
        },
        sacar(valor) {
            if (valor >= saldo) {
                console.log("Saque realizado com sucesso!");
                return;
        },
        get saldoAtual() {
            return saldo;
        },
    };
};
};


const contas = [criarConta("Alice", 3000), criarConta()]
//

//contas[0]. depositar(-8);
contas[1]. sacar(100);

contas.forEach(contas) => { //foreach > para cada item do array
    console.log(`$(conta.titular} tem R$ $(conta.saldoAtual}`); 
})