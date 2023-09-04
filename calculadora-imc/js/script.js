//Definição do Script

//recuperando is dadis da página
const dados = document.querySelector('#health');

dados.addEventListener('submit', function(e){
    e.preventDefault();
    setMensagem('Funciona?');
    getImc();
});

function getImc() {
    const inPeso = document.querySelector('#peso');
    const inAltura = document.querySelector('#altura');
    
    const peso = Number(inPeso.value);
    const altura = Number(inAltura.value);
    
    if(!peso) {
        setMensagem('Peso inválido!');
        return;
    }

    if (!altura){
        setMensagem('Altura inválida!');
        return;
    }
}

function setMensagem(teste){

    const msg = document.querySelector('#resultado');
    msg.innerHTML = '';
    const frase = document.createElement('p');
    frase.classList.add('certo');
    msg.appendChild(frase);
    frase.innerHTML = teste;
}