function mostrarMensagem(texto) {
    const div = document.getElementById("mensagem");
    div.textContent = texto;
    setTimeout(() => div.textContent = "", 3000);
}

function mostrarResultadoPercurso(nome, resultado) {
    const div = document.getElementById("resultadoPercurso");
    div.textContent = `Percurso (${nome}): ` + resultado.join(", ");
}
