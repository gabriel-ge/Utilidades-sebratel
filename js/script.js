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
  copiarRelatoTrocaDeTitularidade();
});

document.getElementById("copiarMensagemBtn").addEventListener("click", function () {
  copiarMensagem();
});

function gerarPPPOE() {
  function removeCaracteresEspeciais(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, "");
  }

  var nomeCompleto = document.getElementById("nome").value;
  var sufixoSelecionado = document.getElementById("sufixo").value;

  var relato = document.getElementById("relato");
  var programa = document.getElementById("programa").value;
  var resultado = document.getElementById("resultado");
  var nomes = nomeCompleto.trimLeft().trimRight().split(" ");
  var primeiroNome = nomes[0].toLowerCase();
  var ultimoNome = nomes[nomes.length - 1].toLowerCase();

  resultado.value = removeCaracteresEspeciais(primeiroNome + ultimoNome + sufixoSelecionado);
  relato.value = "Alterado PPPoE para: " + resultado.value + ". Efetuado alteração também no " + programa;
}



function copiarPPPOE() {
  var resultado = document.getElementById("resultado");
  resultado.select();
  resultado.setSelectionRange(0, resultado.value.length);
  navigator.clipboard.writeText(resultado.value)
}

function copiarRelatoTrocaDeTitularidade() {
  var relato = document.getElementById("relato");
  relato.select();
  relato.setSelectionRange(0, relato.value.length);
  navigator.clipboard.writeText(relato.value)
}

let button = document.getElementById("button");

function gerarRelatoMassivaMatrix() {
  var geral = document.getElementById("geral").value
  var nomeAtendente = document.getElementById("atendente").value;
  var regiao = document.getElementById("regiao").value;
  var prazo = document.getElementById("prazo").value;
  var quantidadeAfetados = document.getElementById("quantidade").value;
  var relato = document.getElementById("mensagem");

  relato.value = nomeAtendente + regiao + prazo + quantidadeAfetados;

  if (geral === "NÃO") {
    relato.value = "Olá, me chamo " + nomeAtendente + ". Sou do time do Suporte Técnico da SEBRATEL. Informamos que estamos passando por um evento massivo na região de " + regiao + " que está afetando um total de " + quantidadeAfetados + " clientes. Nossos técnicos estão trabalhando para finalizar o evento mais rápido possível. Visando isso estamos com prazo para as " + prazo + " horas. A SEBRATEL agradece a compreensão!"
  } else {
    relato.value = "Olá, me chamo " + nomeAtendente + ". Sou do time do Suporte Técnico da SEBRATEL. Informamos que estamos passando por um evento massivo que está afetando toda a nossa rede. Estamos com prazo para as  " + prazo + " e estamos atuando para restabelecermos as conexões o mais rápido possível. A SEBRATEL agradece a compreensão!"
  }
}

function copiarResultadoMatrix() {
  var relato = document.getElementById("mensagem").value;
  var textarea = document.createElement("textarea");
  textarea.value = relato;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function showTooltip() {
  const tooltipBox = document.getElementById('tooltip-box');
  tooltipBox.style.display = 'block';
}

function hideTooltip() {
  const tooltipBox = document.getElementById('tooltip-box');
  tooltipBox.style.display = 'none';
}

const tooltipIcon = document.querySelector('.tooltip-icon');
tooltipIcon.addEventListener('mouseout', hideTooltip);