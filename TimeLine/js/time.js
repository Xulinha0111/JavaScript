// Função que captura o valor da idade, acrescenta 50 e devolve para a página
function newIdade() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade_atual').value;

    let idadeFutura = parseInt(idade) + 50; 

    return document.getElementById('idade_futura').value = idadeFutura;  
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaAtual() {
    let url = 'images/atual.jpeg';

    let img = new Image(250,250);
    img.src = url;    
    
    return document.getElementById('atual').appendChild(img);    
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaJovem() {
    let url = 'images/jovem.jpeg';

    let img = new Image(250,250);
    img.src = url;    

    return document.getElementById('jovem').appendChild(img);
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaIdoso() {
    let url = 'images/velho.jpeg';

    let img = new Image(250,250);
    img.src = url;    

    return document.getElementById('idoso').appendChild(img);
}

