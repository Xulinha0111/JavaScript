document.getElementById('forms').addEventListener('submit', function(e){
    e.preventDefault();
});

function Soma(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var soma = n1 + n2

    document.getElementById('resultado').innerHTML = ('A soma é = ' + soma)
};

function Sub(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var sub = n1 - n2

    document.getElementById('resultado').innerHTML = ('A subtração é = ' + sub)
};

function Mult(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var mult = n1 * n2

    document.getElementById('resultado').innerHTML = ('A multiplicação é = ' + mult)
};

function Div(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var div = n1 / n2

    document.getElementById('resultado').innerHTML = ('A divisão é = ' + div)
};

function Pot(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var div = n1 ** n2

    document.getElementById('resultado').innerHTML = ('A potência de ' + n1 + ' elevado a ' + n2 + ' é = ' + div)
};

function Limpar(){
    document.getElementById('resultado').innerHTML = ''
};