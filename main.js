const pressEnter = (document) => {
  document.addEventListener('keypress', (event) => {
    if (event.which == 13) {
      pesquisar();
    }
  }, false);
}

alert("Todas as palavras começarão com letras minúsculas");
addEventListener("load", iniciar);

var letra;
var mostra;
var elemento = document.getElementById("letra");
var resultado = document.getElementById("resultado");
let descricao = document.getElementById("descricao");

resultado.innerText = "Sua palavra contém: " + letra + " letras.";

pressEnter(document)

function pesquisar() {
  if (elemento.value.length == 1) {
    if (letra.includes(elemento.value)) {
      var id = letra.indexOf(elemento.value);
      mostra[id] = elemento.value;
      descricao.innerText = mostra.join("", ",");
      elemento.value = '';
      if (mostra.length == letra.length && mostra.includes("*") == false) {
        alert("Parabéns você acertou!!!");
        elemento.value = '';
        setTimeout(iniciar, 3000);
      }

    } else {
      alert("Palavra errada: " + elemento.value + "!");
      elemento.value = '';
    }
  }
  if (elemento.value.length > letra.length || elemento.value.length > 1 && elemento.value.length < letra.length) {
    alert("Tente acertar letra por letra ou uma palavra que contém " + letra.length + " letras");
  }
  if (elemento.value.length == letra.length) {
    const teste = letra.join("", ",");
    if (teste.includes(elemento.value)) {
      resultado.innerText = teste;
      alert("Parabéns você acertou!!!");
      elemento.value = '';
      setTimeout(iniciar, 3000);
    } else {
      alert("Palavra errada: " + elemento.value + "!");
      elemento.value = '';
    }
  }
}

function iniciar() {
  var ids = Math.floor(Math.random() * 6); // sortea um numero entre 0 ate o length do array
  // Palavras usadas no jogo 
  var lista1 = ["uva", "hora", "curso", "agricultor", "chuveiro", "costureira", "celular"];
  var lista2 = ["***", "****", "*****", "**********", "********", "**********", "*******"];
  var descri = ["Tem relação com Fruta!", "Tem relação com Tempo!", "Tem relação com aprendizado!", "Tem relação com Roça!", "Tem no banheiro e todo mundo usa!", "Todas as vós tem em casa!", "O que tem em toda casa, e ninguem larga"];
  // vou pega a palavra sorteada
  string1 = lista1[ids];
  string2 = lista2[ids];
  string3 = descri[ids];
  // vou serapa letra por letra e colocando uma ,
  letra = string1.split("");
  mostra = string2.split("");
  descricao.innerText = string3;
  elemento.value = '';
  resultado.innerText = "";
  dica.innerText = "Sua palavra contém: " + letra.length + " letras.";
}
