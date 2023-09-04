// Captura os dados do formulário
const form = document.querySelector('#forms');

// Previne a ação do submit
form.addEventListener('submit', function(e) {
    e.preventDefault();

   // Captura dos inputs
   const inputPeso = form.querySelector('#peso');
   const inputAltura = form.querySelector('#altura');

   const peso = Number(inputPeso.value);
   const altura = Number(inputAltura.value);

    // Testa a mensagem
    if(!peso) {
        exibeMensagem('Peso inválido', false);
        return;
    }

    if(!altura) {
        exibeMensagem('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const classeImc = getClasseImc(imc);

    const msg = `Seu imc é ${imc} (${classeImc})`;
    exibeMensagem(msg, true);
});

// Classificação do IMC
function getClasseImc(imc) {
    const classeImc = ['Abaixo do norma', 'Peso normal','Sobrepeso',
                        'Obesidade grau I','Obesidade grau II','Obesidade grau III'];
    
    if(imc >= 39.9) return classeImc[5];
    if(imc >= 34.9) return classeImc[4];
    if(imc >= 29.9) return classeImc[3];
    if(imc >= 24.9) return classeImc[2];
    if(imc >= 18.9) return classeImc[1];
    if(imc < 18.9)  return classeImc[0];    
}

// Calcula o IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// Função para criar parágrafos
function criarP() {
    const p = document.createElement('p');
    return p;
}

// Prepara a mensaggem para o formulário
function exibeMensagem(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criarP();
   
    isValid ? p.classList.add('ok') : p.classList.add('no')

    p.innerHTML = msg;
    resultado.appendChild(p);    
}

// Captura o evento 'reset' e limpa o resultado
forms.addEventListener('reset', function() {   
    const limpa = document.querySelector('#resultado');
    limpa.innerHTML = '';
});