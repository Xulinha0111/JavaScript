function carregaJovem() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    let idadeFutura = parseInt(idade) + 40;

    return document.getElementById('idadeFutura').value = idadeFutura;
}