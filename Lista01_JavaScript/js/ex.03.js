/*
Lista de Exercícios - JavaScript
Nome: Julia Bellini Sorrente
23/03/2023 - 14h

-- Exercício 03 --
Somar os números de 1 a 1000, 
exibindo o total em um documento da página. 
Exemplo: 1 + 2 + 3 + .... 1000.
*/


let soma = 0;

for (let i = 1; i <= 1000; i++) 
{
    soma += i; 
}

document.write("A soma dos números de 1 a 1000 (Exemplo: 1 + 2 + 3 + ... 1000) é: " + soma)

document.write('</br>Sim moço, é só isso o exercício, pode ir embora...' + '<br>')
document.write('<img src="../images/gatinho.gif" alt=""' + '<br>' + '<br>')
document.write('... moço, é sério, pode ir.')
