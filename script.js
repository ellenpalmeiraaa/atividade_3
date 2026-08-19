function calcularTroco() {
    const preco = parseFloat(document.getElementById('preco').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const dinheiro = parseFloat(document.getElementById('dinheiro').value);
    const divResultado = document.getElementById('resultado');

    if (isNaN(preco) || isNaN(quantidade) || isNaN(dinheiro)) {
        divResultado.textContent = "Por favor, preencha todos os campos.";
        divResultado.style.color = "red";
        return;
    }

    const valorTotal = preco * quantidade;

    if (dinheiro >= valorTotal) {
        const troco = dinheiro - valorTotal;
        divResultado.textContent = `TROCO = ${troco.toFixed(2)}`;
        divResultado.style.color = "black";
    } else {
        const falta = valorTotal - dinheiro;
        divResultado.textContent = `DINHEIRO INSUFICIENTE. FALTAM ${falta.toFixed(2)} REAIS`;
        divResultado.style.color = "red";
    }
}