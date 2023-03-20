let A = parseInt(prompt('Digite o lado A: '));
let B = parseInt(prompt('Digite o lado B: '));
let C = parseInt(prompt('Digite o lado C: '));

if (A<=B+C && B<=A+C && C<=A+B)
{
    if(A==B && B==C)
    {
        document.write('<p style="color: white"> Triângulo Equilátero! </p>')
        document.write('<body bgcolor="#86b1f7">')
    }

    else if(A==B || B==C || A==C)
    {
        document.write('<p style="color: black"> Triângulo Isóceles! </p>')
        document.write('<body bgcolor="#86f791">')
    }

    else
    {
        document.write('<p style="color: black"> Triângulo Escaleno! </p>')
        document.write('<body bgcolor="#eef786">')
    }
}

else{
    document.write('Não é um triângulo.' + "<br>")
    document.write('<img src="images/risada.gif" alt="Sumiu" title="Isto é uma risada ahusahusu">')
}

