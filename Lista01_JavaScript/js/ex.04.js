/*
Lista de Exercícios - JavaScript
Nome: Julia Bellini Sorrente
23/03/2023 - 14h20

-- Exercício 04 --
Exibir em uma página html os 20 
primeiros números da sequência de Fibonacci, 
apresentando uma imagem sobre a série.
*/
document.write('<h3><center>20 Termos da Sequência de Fibonacci</h3></center>')
document.write('<center><img src="../images/gatinho.gif" alt=""</center>' + '<br>')

//Definindo e preenchendo a função Fibonacci
let fibonacci = []

fibonacci[0] = 0
fibonacci[1] = 1

//Laço para percorrer e prencher a função
for (let i = 2; i < 20; i++)
{
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
document.write(fibonacci)
