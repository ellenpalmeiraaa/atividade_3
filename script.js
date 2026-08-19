const button = document.querySelector("button")
const inputPreco = document.getElementById("preco")
const inputQuantidade = document.getElementById("quantidade")
const inputDinheiro = document.getElementById("dinheiro")
const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", calcularTroco)

function calcularTroco() {
    if (inputPreco.value === "" || inputQuantidade.value === "" || inputDinheiro.value === "") {
        alert("Digite um valor válido em todos os campos.")
        return
    }

    const preco = inputPreco.valueAsNumber
    const quantidade = inputQuantidade.valueAsNumber
    const dinheiro = inputDinheiro.valueAsNumber

    const valorTotal = preco * quantidade

    if (dinheiro >= valorTotal) {
        const troco = dinheiro - valorTotal
        paragrafoResultado.textContent = `TROCO = ${troco.toFixed(2)}`
    } else {
        const falta = valorTotal - dinheiro
        paragrafoResultado.textContent = `DINHEIRO INSUFICIENTE. FALTAM ${falta.toFixed(2)} REAIS`
    }
}