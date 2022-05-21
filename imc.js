let imc; let Calculoimc;

function calcularIMC(event) { event.preventDefault();
let peso = document.getElementById('peso').value; 
let altura = document.getElementById('altura').value;
Calculoimc = peso / (altura * altura); 
imc = document.getElementById('imc');
    if (Calculoimc >= 18 && Calculoimc <= 25) {
    imc.innerHTML = ' IMC : ' + Calculoimc.toFixed(2) + '<br/> você está no seu peso ideal';
    }
    else if (Calculoimc > 25 ) {
        imc.innerHTML = 'IMC : ' + Calculoimc.toFixed(2) + '<br/> Cuidado! Você está acima do peso';
    }
   else  if (Calculoimc < 17.99 ) {
        imc.innerHTML = ' IMC : ' + Calculoimc.toFixed(2) + '<br/> Cuidado! Você está abaixo do peso';
        }
}