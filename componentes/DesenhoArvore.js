function desenharArvore(ctx, no, x, y, espacamentoX, nivel = 0) {
    if (!no) return;

    const raio = 20;
    ctx.beginPath();
    ctx.arc(x, y, raio, 0, 2 * Math.PI);
    ctx.fillStyle = "#4ade80";
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(no.valor, x, y);

    const deslocamentoY = 70;
    if (no.esquerda) {
        ctx.beginPath();
        ctx.moveTo(x, y + raio);
        ctx.lineTo(x - espacamentoX, y + deslocamentoY - raio);
        ctx.stroke();
        desenharArvore(ctx, no.esquerda, x - espacamentoX, y + deslocamentoY, espacamentoX / 1.5);
    }
    if (no.direita) {
        ctx.beginPath();
        ctx.moveTo(x, y + raio);
        ctx.lineTo(x + espacamentoX, y + deslocamentoY - raio);
        ctx.stroke();
        desenharArvore(ctx, no.direita, x + espacamentoX, y + deslocamentoY, espacamentoX / 1.5);
    }
}