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

document.getElementById("copiarMensagemBtn").addEventListener("click", function () {
  copiarMensagem();
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

let button = document.getElementById("button");

function gerarRelato() {
  var nomeAtendente = document.getElementById("atendente").value;
  var regiao = document.getElementById("regiao").value;
  var prazo = document.getElementById("prazo").value;
  var quantidadeAfetados = document.getElementById("quantidade").value;
  var relato = document.getElementById("mensagem");

  relato.value = nomeAtendente + regiao + prazo + quantidadeAfetados;

  relato.value = "Ola, me chamo " + nomeAtendente + "Sou do time do Suporte Técnico da SEBRATEL. Informamos que estamos passando por um evento massivo na região de: " + regiao + ". Nossos técnicos estão trabalhando para finalizar o evento mais rápido possível, visando isso estamos com prazo para as: " + prazo + " horas. Estamos com um total de: " + quantidadeAfetados + " clientes afetados. A SEBRATEL agradece a compreensão!"
}

function copiarResultado() {
  var mensagem = document.getElementById("mensagem");
  mensagem.select();
  mensagem.setSelectionRange(0, mensagem.value.length);
  navigator.clipboard.writeText(mensagem.value)
}
