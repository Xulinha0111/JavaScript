//Descubra o número
let num = parseInt(prompt('Digite um número: '));

document.write('Você informou o número ' + num + '<br>');

if (num >= 100) {
    document.write('Número maior ou igual a 100.');
    document.write('<img src="images/palhaço.jpg" alt="Sumiu a imagem daqui lek >:(">');
}

else if (num >= 50 ){
    document.write('Número maior ou igual a 50.');
    document.write('<img src="images/palhaço3.jpg" alt="Sumiu a imagem daqui lek >:(">');
}

else if (num >= 25){
    document.write('Número maior ou igual a 100.');
    document.write('<img src="images/palhaço4.webp" alt="Sumiu a imagem daqui lek >:(">');
}

else {
    document.write('Número menor que 100');
    document.write('<img src="images/palhaço2.jpg" alt="Sumiu a imagem daqui lek >:(">');
}
