function inserir() {
    const valor = parseInt(document.getElementById("entradaValor").value);
    if (!isNaN(valor)) {
        arvore.inserir(valor);
        mostrarMensagem("Valor inserido com sucesso!");
        desenhar();
    }
}

function buscar() {
    const valor = parseInt(document.getElementById("entradaValor").value);
    if (!isNaN(valor)) {
        const encontrado = arvore.buscar(valor);
        mostrarMensagem(encontrado ? "Valor encontrado!" : "Valor não encontrado.");
    }
}

function remover() {
    const valor = parseInt(document.getElementById("entradaValor").value);
    if (!isNaN(valor)) {
        arvore.remover(valor);
        mostrarMensagem("Valor removido.");
        desenhar();
    }
}

function mostrarPercurso(tipo) {
    let resultado = [];
    switch (tipo) {
        case "emOrdem": resultado = percursoEmOrdem(arvore.raiz); break;
        case "preOrdem": resultado = percursoPreOrdem(arvore.raiz); break;
        case "posOrdem": resultado = percursoPosOrdem(arvore.raiz); break;
        case "largura": resultado = percursoLargura(arvore.raiz); break;
        case "profundidade": resultado = percursoProfundidade(arvore.raiz); break;
    }
    mostrarResultadoPercurso(tipo, resultado);
}

function desenhar() {
    const canvas = document.getElementById("quadro");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenharArvore(ctx, arvore.raiz, canvas.width / 2, 40, 150);
}
