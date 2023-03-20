
let opcao = parseInt(prompt('Informe uma opção (de 1 a 5): '));

switch(opcao)
{
    case 1:
    location.href = "pages/dica1.html"
    break;

    case 2:
    location.href = "pages/dica2.html"
    break;

    case 3:
    location.href = "pages/dica3.html"
    break;

    case 4:
    location.href = "pages/dica4.html"
    break;

    case 5:
    location.href = "pages/dica5.html"
    break;

    default:
    alert('Número inválido. Tente novamente.')
}