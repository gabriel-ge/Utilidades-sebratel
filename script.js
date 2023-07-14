document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    exibirDados();
  });
  
  document.getElementById("nome").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myForm").submit();
    }
  });
  
  document.getElementById("copiarBtn").addEventListener("click", function() {
    copiarResultado();
  });
  
  function exibirDados() {
    var nomeCompleto = document.getElementById("nome").value;
    var sufixoSelecionado = document.getElementById("sufixo").value;
    var resultado = document.getElementById("resultado");
  
    var nomes = nomeCompleto.split(" ");
    var primeiroNome = nomes[0].toLowerCase();
    var ultimoNome = nomes[nomes.length - 1].toLowerCase();
  
    resultado.value = primeiroNome + ultimoNome + sufixoSelecionado;
  }
  
  function copiarResultado() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    resultado.setSelectionRange(0, resultado.value.length);
    navigator.clipboard.writeText(resultado.value)
      .then(function () {
        alert("Resultado copiado para a área de transferência!");
      })
      .catch(function (error) {
        console.error("Erro ao copiar o resultado:", error);
      });
  }
  