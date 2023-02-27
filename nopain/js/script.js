// Declaração de Variáveis
let nome = 'Eu';
const nomes = 'Você'
let numero_inteiro = 3
let numero_flutuante = 2.5678
let condicao = false

/*
console.log(typeof nome)
console.log(typeof numero_inteiro)
console.log(typeof numero_flutuante)
console.log(typeof condicao)
*/

//4 Operações Básicas (+ - * /)
let n1 = parseFloat(prompt('Informe um número: '))
let n2 = parseFloat(prompt('Informe outro número: '))

let soma = n1 + n2
let subs = n1 - n2
let mults = n1 * n2
let divs = n1 / n2

/*
console.log('\n',soma,'\n', subs,'\n', mults,'\n', divs,'\n')

console.log(soma)
console.log(subs)
console.log(mults)
console.log(divs)
*/

/*document.write('A soma é: ', soma)
document.write('. A subtração é: ', subs)
document.write('. A multiplicação é: ', mults)
document.write('. A divisão é: ', divs)
*/


//O alert só contatena informações com o "+", diferente do document.write, que usa a ","
alert(
    'A soma é: ' + soma + '\n' + 'A subtração é: ' + subs + '\n' + 'A multiplicação é: ' + mults + '\n' + 'A divisão é: ' + divs + '\n'
)