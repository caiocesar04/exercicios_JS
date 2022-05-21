let Calculomedia; let media;

function calcularMedia(event) { event.preventDefault();
 let nota1 = document.getElementById('nota1').value; 
let nota2 = document.getElementById('nota2').value;
  let nota3 = document.getElementById('nota3').value;
 let nota4 = document.getElementById('nota4').value;
Calculomedia = (parseFloat( nota1) + parseFloat( nota2) + parseFloat(nota3) + parseFloat(nota4)) /4 ; 
media = document.getElementById('media');
    if (Calculomedia >= 6) {
        media.innerHTML = ' Sua média é : ' + Calculomedia.toFixed(1) + ' Parabéns! Você foi aprovado';
    }
    else if (Calculomedia <= 5) {
        media.innerHTML = 'Sua média é : ' + Calculomedia.toFixed(1) + ' Você está abaixo média(6), portanto foi Reprovado!';
    }
}
