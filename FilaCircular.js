class FilaCircular {
    constructor(tamanho) {
        this.fila = new Array(tamanho);
        this.inicializarFila(tamanho);
        this.inicio = 0;
        this.fim = 0;
        this.total = 0;
    }

    inicializarFila(tamanho){
        console.log('A fila de ' + tamanho + ' elementos foi inicializada abaixo:')
        for(let i = 0; i < this.fila.length; i++){
            this.fila[i] = 'Vazio';
        }
    }

    deletarFila() {

    }

    inserir(elemento) {
        if (this.estahCheia()) throw "A fila está cheia";
        this.fila[this.fim] = elemento;
        this.fim = (this.fim + 1) % this.fila.length;
        this.total++;
    }

    remover() {
        if (this.estahVazia()) throw "A fila está vazia.";
        let elemento = this.fila[this.inicio];
        this.fila[this.inicio] = 'Vazio';
        this.inicio = (this.inicio + 1) % this.fila.length;
        this.total--;
        return elemento;
    }

    mostrar() {
        console.log("--Fila--");
        for(let i = 0; i < this.fila.length; i++){
            console.log("Posição: " + i + "[" +  this.fila[i] + "]")
        }
        console.log("O início da fila está no índice " + this.inicio);
        console.log("O fim da fila está no índice " + this.fim);
        console.log("--Fim Fila--");
    }

    estahVazia() {
        return this.total == 0;
    }

    estahCheia() {
        return this.total == this.fila.length;
    }
}