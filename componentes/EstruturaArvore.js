class No {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

class ArvoreBinariaBusca {
    constructor() {
        this.raiz = null;
    }

    inserir(valor) {
        this.raiz = this.#inserirRecursivo(this.raiz, valor);
    }

    #inserirRecursivo(no, valor) {
        if (no == null) {
            return new No(valor);
        }
        if (valor < no.valor) {
            no.esquerda = this.#inserirRecursivo(no.esquerda, valor);
        } else if (valor > no.valor) {
            no.direita = this.#inserirRecursivo(no.direita, valor);
        }
        return no;
    }

    buscar(valor) {
        return this.#buscarRecursivo(this.raiz, valor);
    }

    #buscarRecursivo(no, valor) {
        if (no == null || no.valor === valor) {
            return no;
        }
        if (valor < no.valor) {
            return this.#buscarRecursivo(no.esquerda, valor);
        } else {
            return this.#buscarRecursivo(no.direita, valor);
        }
    }

    remover(valor) {
        this.raiz = this.#removerRecursivo(this.raiz, valor);
    }

    #removerRecursivo(no, valor) {
        if (no == null) return null;

        if (valor < no.valor) {
            no.esquerda = this.#removerRecursivo(no.esquerda, valor);
        } else if (valor > no.valor) {
            no.direita = this.#removerRecursivo(no.direita, valor);
        } else {
            if (no.esquerda == null) return no.direita;
            if (no.direita == null) return no.esquerda;

            const menorMaior = this.#minimo(no.direita);
            no.valor = menorMaior.valor;
            no.direita = this.#removerRecursivo(no.direita, menorMaior.valor);
        }
        return no;
    }

    #minimo(no) {
        while (no.esquerda != null) {
            no = no.esquerda;
        }
        return no;
    }
}

const arvore = new ArvoreBinariaBusca();