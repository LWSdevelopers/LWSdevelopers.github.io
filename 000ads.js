const anuncioData = {
  imagem: "https://lwsdevelopers.github.io/000abanner.png",
  titulo: "🤩 Megabytes MB - quase de borla!",
  descricao: "Mais internet para navegar, estudar e ver vídeos pagando quase de borla. Aproveita já!",
  link: "https://abre.ai/ativarmbs?target=blank",
  textoBotao: "Ativar agora"
};

const anuncioContainer = document.getElementById("anuncio");

anuncioContainer.innerHTML = `
  <div class="patrocinado">Patrocinado • Anúncio</div>
  <div class="conteudo-anuncio">
    <h4>${anuncioData.titulo}</h4>
    <p>${anuncioData.descricao}</p>
  </div>
  <button class="botao-anuncio" target="_blank" onclick="window.open('${anuncioData.link}', '_blank')">
    ${anuncioData.textoBotao}
  </button>
`;
