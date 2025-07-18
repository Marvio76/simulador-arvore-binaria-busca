function percursoEmOrdem(no, resultado = []) {
    if (no) {
        percursoEmOrdem(no.esquerda, resultado);
        resultado.push(no.valor);
        percursoEmOrdem(no.direita, resultado);
    }
    return resultado;
}

function percursoPreOrdem(no, resultado = []) {
    if (no) {
        resultado.push(no.valor);
        percursoPreOrdem(no.esquerda, resultado);
        percursoPreOrdem(no.direita, resultado);
    }
    return resultado;
}

function percursoPosOrdem(no, resultado = []) {
    if (no) {
        percursoPosOrdem(no.esquerda, resultado);
        percursoPosOrdem(no.direita, resultado);
        resultado.push(no.valor);
    }
    return resultado;
}

function percursoLargura(no) {
    const resultado = [];
    const fila = [];
    if (no) fila.push(no);
    while (fila.length > 0) {
        const atual = fila.shift();
        resultado.push(atual.valor);
        if (atual.esquerda) fila.push(atual.esquerda);
        if (atual.direita) fila.push(atual.direita);
    }
    return resultado;
}

function percursoProfundidade(no) {
    const resultado = [];
    const pilha = [];
    if (no) pilha.push(no);
    while (pilha.length > 0) {
        const atual = pilha.pop();
        resultado.push(atual.valor);
        if (atual.direita) pilha.push(atual.direita);
        if (atual.esquerda) pilha.push(atual.esquerda);
    }
    return resultado;
}
