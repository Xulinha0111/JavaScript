let altura = parseFloat(prompt('Digite sua altura em metros. Ex: 1.72: '))
let peso = parseFloat(prompt('Informe o seu peso em Kg. Ex: 65.3: '))

let imc = peso / (altura * altura)

if (imc <= 16.9) {
    document.write('Seu IMC é: ' + imc + '<br>' + 'Você está muito abaixo do nível saudável. Procure um médico.')
    document.write('<img src="Images\gatinho.jpg" alt="">')
}

else if (imc >= 17 && imc <= 18.4){
    document.write('Seu IMC é: ' + imc + '<br>' +  'Você está abaixo do nível saudável. Procure um médico.')
    document.write('<img src="Images\gatinho.jpg" alt="">')
}

else if (imc >= 18.5 && imc <= 24.9){
    document.write('Seu IMC é: ' + imc + '<br>' + 'Você está dentro do nível saudável.')
    document.write ('<img src="Images\gatinho.jpg" alt="">')
}

else if (imc >= 30 && imc <= 34.9){
    document.write('Seu IMC é: ' + imc + '<br>' +  'Você está um pouco acima do limite saudável. Procure um médico.')
    document.write('<img src="Images\gatinho.jpg" alt="">')
}

else if (imc >= 35 && imc <= 39.9){
    document.write('Seu IMC é: ' + imc + '<br>' + 'Você está acima do limite saudável. Procure um médico.')
    document.write('<img src="Images\gatinho.jpg" alt="">')
}

else if (imc >= 40){
    document.write('Seu IMC é: ' + imc + '<br>' + 'Você está muito acima do limite saudável. Procure um médico com urgência.')
    document.write('<img src="Images\gatinho.jpg" alt="">')
}