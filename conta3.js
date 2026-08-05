class ContaBancaria {
    #saldo; //#deixa privado

    construtor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("Valor de depósito inválido.");
            return;
    }
    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente.");
            return;
        }
        this.saldo -= valor;
    }
}

const contas =[new ContaBancaria("Flavio", 1000), new ContaBancaria("Joel", 500)];

contas.foreach((conta) => console.log))