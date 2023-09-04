// Capturando os dados do formulário
const dados = document.querySelector('#forms');

// Criando um monitor do evento submit e função anônima
dados.addEventListener('submit', function (event) {
    
    // Previne o evento padrão do submit
    event.preventDefault();

    // Captura os dados dos inputs
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Validade dos valores que atendem à condição
    if (!peso || peso >= 400) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    // Chamada da função que calcula o IMC
    const imc = getImc(peso, altura);

    // Chamada da função que traz a mensagem da classificação do IMC
    const classeImc = getClasseImc(imc);

    // Monta a mensagem para ser enviada
    const mensagem = (`O seu IMC é ${imc} (${classeImc}).`);

    // Chama a função do resultado (mensagem) e seta como True
    setResultado(mensagem, true);
});

// Função que gera a classificação do IMC
function getClasseImc(imc) {
    const classeImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    // Testa as condições e retorna a posição do array
    if (imc >= 39.9) return classeImc[5]
    if (imc >= 34.9) return classeImc[4]
    if (imc >= 29.9) return classeImc[3]
    if (imc >= 24.9) return classeImc[2]
    if (imc >= 18.5) return classeImc[1]
    if (imc < 18.5) return classeImc[0]
}

// Função para calcular o IMC
function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

// Função que cria o resultado
function setResultado(mensagem, isValido) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criarP();

    // Operador ternário que valida a mensagem
    isValido ? p.classList.add('fraseOk') : p.classList.add('fraseNo')

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}

// Função para criar o elemento p
function criarP() {
    const p = document.createElement('p');    
    return p;
}

/*
function limpaTudo() {
    const limpa = document.querySelector('#resultado');
    limpa.innerHTML = '';
}
*/

// Captura o evento 'reset' e limpa o resultado
forms.addEventListener('reset', function() {   
    const limpa = document.querySelector('#resultado');
    limpa.innerHTML = '';
});