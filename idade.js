var idade; Categoria;
function InformarCategoria(event) 
{ event.preventDefault();
  var idade = document.getElementById('idade').value; 
  InformarCategoria = idade + " anos... </br>"
  Categoria = document.getElementById('Categoria');
  
if(idade >= 5 && idade <= 7) {
Categoria.innerHTML = InformarCategoria + "Então Você faz parte da categoria Infantil A!"
}else if(idade >= 8 && idade <= 10) {
Categoria.innerHTML = InformarCategoria + "Sua categoria é Infantil B"
}else if(idade >= 11 && idade <= 13) {
Categoria.innerHTML =  InformarCategoria + "Sua categoria é Juvenil A"
}else if(idade >= 14 && idade <= 17) {
Categoria.innerHTML =  InformarCategoria + "Sua categoria é Juvenil B"
}else if(idade >= 18) {
Categoria.innerHTML = InformarCategoria + "Já é maior de idade, faz parte da Categoria Adulta"
}
else if (idade < 5 ) {
  Categoria.innerHTML = InformarCategoria + " Tem menos de 5 anos então,  por enquanto você não se encaixa em nenhuma das categorias"
}
}
