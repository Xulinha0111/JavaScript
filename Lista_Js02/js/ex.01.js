/*
Lista de Exercícios - JavaScript
Nome: Julia Bellini Sorrente
03/04/2023 - 13h40

-- Exercício 01 --
 Imprimir os números impares 
 menores que 100 e exibir na janela do navegador, 
 linha a linha com o título "Número 1", "Par", "Número 3", "Par" ...
*/
document.write ('<h3>Números ÍMPARES de 0 a 100</h3>')

let num = 0;

for (let i = 1; i <= 100; i=i+2)
{
   document.write ('Número ' + (num + i) + '</br>')
   document.write ('Par...' + '</br>')
}
