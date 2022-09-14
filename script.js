var carta1 = {
  nome: "Galakrond",
  atributos: {
    ataque: 8,
    defesa: 5,
    magia: 9
  }
}
  
var carta2 = {
  nome: "Calafrarte",
  atributos: {
    ataque: 6,
    defesa: 6,
    magia: 10
  }
}

var carta3 = {
  nome: "Galakrond",
  atributos: {
    ataque: 8,
    defesa: 5,
    magia: 9
  }
}

var cartas = [carta1, carta2, carta3]
var cartaMaquina
var cartaJogador

function sortearCarta(){
  var numCartaMaquina = Math.floor(Math.random() * 3)
  cartaMaquina = cartas[numCartaMaquina]
  
  var numCartaJogador = Math.floor(Math.random() * 3)
  while (numCartaJogador == numCartaMaquina){
    numCartaJogador = Math.floor(Math.random() * 3)
  }
  cartaJogador = cartas[numCartaJogador]
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  exibirOpcoes()
}

function exibirOpcoes(){
  var opcoes = document.getElementById("opcoes")
  var opcoesTexto = ""
  
  for(var atributo in cartaJogador.atributos){
    opcoesTexto += 
      `<input type="radio" name="atributo" value="${atributo}">` + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
  var radioAtributos = document.getElementsByName("atributo")
  for(var i = 0; i < radioAtributos.length; i++){
    if(radioAtributos[i].checked == true){
      return radioAtributos[i].value
    }
  }
}


function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  var elementoResultado = document.getElementById("resultado")
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
  
  if(valorCartaJogador > valorCartaMaquina){
    elementoResultado.innerHTML = "Você venceu!!"
  } else if(valorCartaMaquina > valorCartaJogador){
    elementoResultado.innerHTML = "Você perdeu..."
  } else {
    elementoResultado.innerHTML = "Empate."
  }
}