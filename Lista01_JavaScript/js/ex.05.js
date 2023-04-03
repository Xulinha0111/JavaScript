/*
Lista de Exercícios - JavaScript
Nome: Julia Bellini Sorrente
03/04/2023 - 14h

-- Exercício 03 --
Solicitar ao usuário um número inteiro qualquer e, 
apresentar em um alert a raiz quadrada, raiz cúbica e 
a potência do valor, linha a linha.
*/

let num = parseInt(prompt('Digite um número inteiro qualquer: '))

alert (
    'A raiz quadrada do número ' + num + ' é: ' + (Math.sqrt(num)) + '\n' +

    'A raiz cúbica do número ' + num + ' é: ' + (Math.cbrt(num)) + '\n' +

    'O número ' + num + ' elevado a 2 é igual a: ' + num ** 2 
    )

document.write('Sim moço, é só isso o exercício, pode ir embora...' + '<br>')
document.write('<img src="../images/gatinho.gif" alt=""' + '<br>' + '<br>')
document.write('... moço, é sério, pode ir.')
