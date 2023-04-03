/*
Lista de Exercícios - JavaScript
Nome: Julia Bellini Sorrente
23/03/2023 - 13h45

-- Exercício 02 --
Solicitar ao usuário um número inteiro de 1 a 10, 
calcular a tabuada deste número e exibir na janela do navegador, 
linha a linha.
*/

//Declarar variável e pedri informações para o usuário
let num = parseInt(prompt('Digite um número inteiro de 0 a 10: '))

//Caso o número for maior que 10, mostrar um "erro"
if (num > 10)
{
    alert('Número inválido!')
}

//Caso o número for maior que 0 e menor ou igual a 10
else if (num > 0 && num <= 10)
{
    document.write('<h2><center>Tabuada do número ' + num + '</h2></cneter><br>')
    
    //Laço for para a múltiplicação
    for (let i = 1; i <= 10; i++) 
    { 
        let mult = num * i;
        
        //Devolução para o usuário
        document.write(num + " x " + i + " = " + mult + '<br>');
    }
}
