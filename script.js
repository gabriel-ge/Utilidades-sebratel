document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  exibirDados();
});

document.getElementById("nome").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myForm").submit();
  }
});

document.getElementById("copiarBtn").addEventListener("click", function () {
  copiarResultado();
});

document.getElementById("copiarRelatoBtn").addEventListener("click", function () {
  copiarRelato();
});

function exibirDados() {
  var nomeCompleto = document.getElementById("nome").value;
  var sufixoSelecionado = document.getElementById("sufixo").value;
  var resultado = document.getElementById("resultado");
  var relato = document.getElementById("relato");
  var programa = document.getElementById("programa").value;

  var nomes = nomeCompleto.split(" ");
  var primeiroNome = nomes[0].toLowerCase();
  var ultimoNome = nomes[nomes.length - 1].toLowerCase();

  resultado.value = primeiroNome + ultimoNome + sufixoSelecionado;
  relato.value = "Alterado PPPoE para: " + resultado.value + "Alterado também no: " + programa;
}

function copiarResultado() {
  var resultado = document.getElementById("resultado");
  resultado.select();
  resultado.setSelectionRange(0, resultado.value.length);
  navigator.clipboard.writeText(resultado.value)
}

function copiarRelato() {
  var relato = document.getElementById("relato");
  relato.select();
  relato.setSelectionRange(0, relato.value.length);
  navigator.clipboard.writeText(relato.value)
}
