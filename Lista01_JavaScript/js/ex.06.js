/*
Lista de Exercícios - JavaScript
Nome: Julia Bellini Sorrente
03/04/2023 - 13h20

-- Exercício 06 --
Solicite ao usuário os dados de altura, 
sexo e destro-canhoto de 5 pessoas. Exiba no 
documento da página, quantas pessoas são do sexo masculino e 
quantas pessoas são do sexo feminino, além de quantos são destros 
e canhotos em porcentagem.
*/

//Declarando Variáveis e Contadores
let altura 
let sexo
let lado

let countMasc = 0
let countFem = 0
let countDestro = 0
let countCanhoto = 0

//Laço For para pedir dados ao usuário, percorrer os contadores e preenchê-los
for(let i = 1; i <= 5; i++) 

{
  altura = parseFloat(prompt('Digite a altura da Pessoa ' + i + ' (em cm): '))
  sexo = prompt('Digite o sexo da Pessoa ' + i + ' (M ou F): ')
  lado = prompt('Digite o lado dominante da Pessoa ' + i + ' (D ou C): ')

  //'toUpperCase()' retorna o valor da string original convertido em letras maiúsculas
  if(sexo.toUpperCase() === "M") 
  {
    countMasc++;
  } 
  
  else if(sexo.toUpperCase() === "F") 
  {
    countFem++;
  }


  if(lado.toUpperCase() === "D") 
  {
    countDestro++;
  } 
  else if(lado.toUpperCase() === "C") 
  {
    countCanhoto++;
  }
}

//Fazendo Porcentagem
let porcDestro = (countDestro / 5) * 100;
let porcCanhoto = (countCanhoto / 5) * 100;

//Devolvendo Informações para o Usuário
document.write('<h3>Resultado da Pesquisa</h3>')

document.write('Quantidade de pessoas do sexo masculino: ' + countMasc + '</br>');
document.write('Quantidade de pessoas do sexo feminino: ' + countFem + '</br>');
document.write('Porcentagem de pessoas destros: %' + porcDestro + '</br>');
document.write('Porcentagem de pessoas canhotos: %' + porcCanhoto + '</br>');
